/*

 Unitrad UI APIライブラリ

 Copyright (c) 2017 CALIL Inc.
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php

 */

const ENDPOINT = 'https://unitrad.calil.jp/v1/';
const FIELDS = ['free', 'title', 'author', 'publisher', 'isbn', 'ndc', 'year_start', 'year_end', 'region'] as const;

export interface UnitradQuery {
  free?: string;
  title?: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  ndc?: string;
  year_start?: string;
  year_end?: string;
  region?: string;
}

export type UnitradQueryLoose = Partial<UnitradQuery>;

export interface UnitradResult {
  uuid?: string;
  version?: number;
  running?: boolean;
  count?: number;
  books?: any[];
  books_diff?: {
    insert: any[];
    update: any[];
  };
  [key: string]: any;
}

/**
 * Unitrad APIにアクセスするための共通関数
 * @param command APIのコマンド
 * @param query クエリパラメータ
 */
async function _request(command: string, query?: Record<string, string | number>): Promise<{ ok: boolean; body: any }> {
  const qs = query ? '?' + new URLSearchParams(query as Record<string, string>).toString() : '';
  const res = await fetch(ENDPOINT + command + qs);
  const body = await res.json();
  return { ok: res.ok, body };
}


/** 横断検索APIクラス  */
export default class api {
  callback: (data: UnitradResult) => void;
  killed: boolean;
  data: UnitradResult;

  /**
   * 検索APIの起動
   * @param query - 検索クエリ
   * @param callback - コールバック関数
   */
  constructor(query: UnitradQuery, callback: (data: UnitradResult) => void) {
    this.callback = callback;
    this.killed = false;
    this.search(query);
  }

  /**
   * 検索の中止
   */
  kill() {
    this.killed = true;
  }

  search(query: UnitradQuery) {
    if (this.killed) return;
    _request('search', stripQuery(query) as Record<string, string>)
      .then(({ ok, body }) => {
        if (ok) {
          this.receive(body);
        } else {
          setTimeout(() => this.search(query), 1000);
        }
      })
      .catch(() => setTimeout(() => this.search(query), 1000));
  }

  polling() {
    if (this.killed) return;
    _request('polling', {
      uuid: this.data.uuid,
      version: this.data.version,
      diff: 1,
      timeout: 10,
    }).then(({ body }) => {
      if (body === null) {
        setTimeout(() => this.polling(), 100);
      } else {
        this.receive(body);
      }
    });
  }

  receive(data: UnitradResult) {
    if (this.killed) return;
    if (data.books_diff) {
      Array.prototype.push.apply(this.data.books, data.books_diff.insert);
      for (let key in data) {
        if (data.hasOwnProperty(key) && key !== 'books_diff') {
          this.data[key] = data[key];
        }
      }
      for (let d of data.books_diff.update) {
        for (let key in d) {
          if (d.hasOwnProperty(key) && key !== '_idx') {
            if (Array.isArray(d[key]) === true) {
              Array.prototype.push.apply(this.data.books[d._idx][key], d[key]);
            } else if (d[key] instanceof Object) {
              for (let k in d[key]) {
                if (d[key].hasOwnProperty(k)) {
                  this.data.books[d._idx][key][k] = d[key][k];
                }
              }
            } else {
              this.data.books[d._idx][key] = d[key];
            }
          }
        }
      }
    } else {
      this.data = data;
    }
    this.callback(this.data);
    if (data.running === true) {
      console.log('[Unitrad] continue...');
      if (data.version === 1 && this.data.books.length === 0) {
        setTimeout(() => this.polling(), 20);
      } else {
        setTimeout(() => this.polling(), 500);
      }
    } else {
      console.log('[Unitrad] complete.');
    }
  }
}


/**
 * クエリを共通形式にして返す
 * @param query
 */
export function normalizeQuery(query: UnitradQueryLoose): UnitradQuery {
  let tmp: UnitradQuery = {};
  for (let k of FIELDS) {
    tmp[k] = query[k] ? query[k] : '';
  }
  return tmp;
}


/**
 * クエリが空かどうか判定する
 *   "region"のみの場合は空と判定する
 * @param query
 */
export function isEmptyQuery(query?: UnitradQuery | null): boolean {
  if (query) {
    for (let k of FIELDS) {
      if (k === 'region') continue;
      if (query.hasOwnProperty(k) && query[k] !== '') return false;
    }
  }
  return true;
}


/**
 * クエリが同じかどうか判定する
 * @param q1 比較元クエリ
 * @param q2 比較先クエリ
 */
export function isEqualQuery(q1: UnitradQuery, q2: UnitradQuery): boolean {
  for (let k of FIELDS) {
    if (k === 'region') continue;
    if ((q1 && q1.hasOwnProperty(k) ? q1[k] : '') !== (q2 && q2.hasOwnProperty(k) ? q2[k] : '')) return false;
  }
  return true;
}


/**
 * クエリを内容のあるプロパティだけにする
 * @param query
 */
export function stripQuery(query: UnitradQuery): UnitradQuery {
  let tmp: UnitradQuery = {};
  for (let k of FIELDS) {
    if (query.hasOwnProperty(k) && query[k] !== '') {
      tmp[k] = query[k];
    }
  }
  return tmp;
}

/**
 * マッピングデータを取得する
 * @param region リージョン
 * @param callback コールバック関数
 */
export function fetchMapping(region: string, callback: (data: any) => void): void {
  _request('mapping', { region }).then(({ body }) => callback(body));
}
