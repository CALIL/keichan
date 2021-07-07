/*

 Unitrad UI APIライブラリ

 Copyright (c) 2017 CALIL Inc.
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php

 */

import queryString from 'query-string';

declare type UnitradQuery = {
  free?: string,
  title?: string,
  author?: string,
  publisher?: string,
  isbn?: string,
  ndc?: string,
  year_start?: string,
  year_end?: string,
  region?: string
};

declare type UnitradQueryLoose = {
  [string]: string
};

declare type UnitradResult = {
  uuid: string,
  version: number,
  running: boolean,
  remains: Array<string>,
  errors: Array<string>,
  count: number,
  books: Array<UnitradBook>,
  books_diff: {
    update: Array<{
      _idx: number
    }>,
    insert: Array<UnitradBook>
  }
};

declare type UnitradBook = {
  url: string,
  title: string,
  volume: string,
  author: string,
  publisher: string,
  _isbn: string,
  isbn: string,
  _pubdate: number,
  pubdate: string,
  id: string,
  holdings: Array<number>,
  _holdings: number,
  _holding_key: number,
  estimated_holdings: Array<number>,
};

declare type UIFilter = {
  id: number,
  name: string,
  includes: Array<number>,
  message?: string
};
const ENDPOINT = 'https://unitrad.calil.jp/v1/';
const FIELDS = ['free', 'title', 'author', 'publisher', 'isbn', 'ndc', 'year_start', 'year_end', 'region'];


/**
 * Unitrad APIにアクセスするための共通関数
 * @param command APIのコマンド
 * @param params 検索クエリ
 * @returns {Object}
 * @private
 */
function _request(command, params) {
  return fetch(ENDPOINT + command + '?' + queryString.stringify(params)).then(r => r.json());
}


/** 横断検索APIクラス  */
export class api {
  /**
   * 検索APIの起動
   * @param query - 検索クエリ
   * @param callback - コールバック関数
   */
  callback: (data: UnitradResult) => void;
  killed: boolean;
  data: UnitradResult;

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
    if (!this.killed) {
      _request('search', stripQuery(query))
        .then((r) => {
          this.receive(r);
        }).catch(() => {
          setTimeout(() => this.search(query), 1000);
        })
    }
  }

  polling() {
    if (!this.killed) {
      _request('polling', {
          uuid: this.data.uuid,
          version: this.data.version,
          diff: 1,
          timeout: 10
        })
        .then((r) => {
            this.receive(r);
        }).catch(() => {
          setTimeout(() => this.polling(), 100);
        })
    }
  }

  receive(data: UnitradResult) {
    if (!this.killed) {
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
      // if (data.running === true) {
      if (data.remains.includes('openBD') || data.remains.includes('国立国会図書館')) {
        console.log('[Unitrad] continue...');
        setTimeout(() => this.polling(), 500);
      } else {
        console.log('[Unitrad] complete.');
      }
    }
  }
}


/**
 * クエリを共通形式にして返す
 * @param query
 * @returns {Object}
 */
export function normalizeQuery(query: UnitradQueryLoose): UnitradQuery {
  let tmp = {};
  for (let k of FIELDS) {
    tmp[k] = query[k] ? query[k] : '';
  }
  return tmp
}


/**
 * クエリが空かどうか判定する
 *   "region"のみの場合は空と判定する
 * @param query
 * @returns {boolean}
 */
// export function isEmptyQuery(query: ? UnitradQuery): boolean {
export function isEmptyQuery(query: UnitradQuery): boolean {
    if (query) {
    for (let k of FIELDS) {
      if (k === 'region') continue;
      if (query.hasOwnProperty(k) && query[k] !== '') return false
    }
  }
  return true
}


/**
 * クエリが同じかどうか判定する
 * @param q1 比較元クエリ
 * @param q2 比較先クエリ
 * @returns {boolean}
 */
export function isEqualQuery(q1: UnitradQuery, q2: UnitradQuery): boolean {
  for (let k of FIELDS) {
    if (k === 'region') continue;
    if ((q1 && q1.hasOwnProperty(k) ? q1[k] : '') !== (q2 && q2.hasOwnProperty(k) ? q2[k] : '')) return false
  }
  return true
}


/**
 * クエリを内容のあるプロパティだけにする
 * @param query
 * @returns {Object} query
 */
export function stripQuery(query: UnitradQuery): UnitradQuery {
  let tmp = {};
  for (let k of FIELDS) {
    console.log(query[k])
    if (query.hasOwnProperty(k) && query[k] && query[k] !== '') {
      tmp[k] = query[k];
    }
  }
  return tmp
}

/**
 * マッピングデータを取得する
 * @param region {String} リージョン
 * @param callback(data) コールバック関数
 */
export function fetchMapping(region: string, callback: (data: any) => void): void {
  _request('mapping', {
    'region': region
  }).then((r) => {
    callback(r)
  })
}