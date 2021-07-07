"use strict";
/*

 Unitrad UI APIライブラリ

 Copyright (c) 2017 CALIL Inc.
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php

 */
exports.__esModule = true;
exports.fetchMapping = exports.stripQuery = exports.isEqualQuery = exports.isEmptyQuery = exports.normalizeQuery = exports.api = void 0;
var query_string_1 = require("query-string");
var ENDPOINT = 'https://unitrad.calil.jp/v1/';
var FIELDS = ['free', 'title', 'author', 'publisher', 'isbn', 'ndc', 'year_start', 'year_end', 'region'];
/**
 * Unitrad APIにアクセスするための共通関数
 * @param command APIのコマンド
 * @param params 検索クエリ
 * @returns {Object}
 * @private
 */
function _request(command, params) {
    return fetch(ENDPOINT + command + '?' + query_string_1["default"].stringify(params)).then(function (r) { return r.json(); });
}
/** 横断検索APIクラス  */
var api = /** @class */ (function () {
    function api(query, callback) {
        this.callback = callback;
        this.killed = false;
        this.search(query);
    }
    /**
     * 検索の中止
     */
    api.prototype.kill = function () {
        this.killed = true;
    };
    api.prototype.search = function (query) {
        var _this = this;
        if (!this.killed) {
            _request('search', stripQuery(query))
                .then(function (r) {
                _this.receive(r);
            })["catch"](function () {
                setTimeout(function () { return _this.search(query); }, 1000);
            });
        }
    };
    api.prototype.polling = function () {
        var _this = this;
        if (!this.killed) {
            _request('polling', {
                uuid: this.data.uuid,
                version: this.data.version,
                diff: 1,
                timeout: 10
            })
                .then(function (r) {
                _this.receive(r);
            })["catch"](function () {
                setTimeout(function () { return _this.polling(); }, 100);
            });
        }
    };
    api.prototype.receive = function (data) {
        var _this = this;
        if (!this.killed) {
            if (data.books_diff) {
                Array.prototype.push.apply(this.data.books, data.books_diff.insert);
                for (var key in data) {
                    if (data.hasOwnProperty(key) && key !== 'books_diff') {
                        this.data[key] = data[key];
                    }
                }
                for (var _i = 0, _a = data.books_diff.update; _i < _a.length; _i++) {
                    var d = _a[_i];
                    for (var key in d) {
                        if (d.hasOwnProperty(key) && key !== '_idx') {
                            if (Array.isArray(d[key]) === true) {
                                Array.prototype.push.apply(this.data.books[d._idx][key], d[key]);
                            }
                            else if (d[key] instanceof Object) {
                                for (var k in d[key]) {
                                    if (d[key].hasOwnProperty(k)) {
                                        this.data.books[d._idx][key][k] = d[key][k];
                                    }
                                }
                            }
                            else {
                                this.data.books[d._idx][key] = d[key];
                            }
                        }
                    }
                }
            }
            else {
                this.data = data;
            }
            this.callback(this.data);
            // if (data.running === true) {
            if (data.remains.includes('openBD') || data.remains.includes('国立国会図書館')) {
                console.log('[Unitrad] continue...');
                setTimeout(function () { return _this.polling(); }, 500);
            }
            else {
                console.log('[Unitrad] complete.');
            }
        }
    };
    return api;
}());
export default api;
/**
 * クエリを共通形式にして返す
 * @param query
 * @returns {Object}
 */
function normalizeQuery(query) {
    var tmp = {};
    for (var _i = 0, FIELDS_1 = FIELDS; _i < FIELDS_1.length; _i++) {
        var k = FIELDS_1[_i];
        tmp[k] = query[k] ? query[k] : '';
    }
    return tmp;
}
exports.normalizeQuery = normalizeQuery;
/**
 * クエリが空かどうか判定する
 *   "region"のみの場合は空と判定する
 * @param query
 * @returns {boolean}
 */
// export function isEmptyQuery(query: ? UnitradQuery): boolean {
function isEmptyQuery(query) {
    if (query) {
        for (var _i = 0, FIELDS_2 = FIELDS; _i < FIELDS_2.length; _i++) {
            var k = FIELDS_2[_i];
            if (k === 'region')
                continue;
            if (query.hasOwnProperty(k) && query[k] !== '')
                return false;
        }
    }
    return true;
}
exports.isEmptyQuery = isEmptyQuery;
/**
 * クエリが同じかどうか判定する
 * @param q1 比較元クエリ
 * @param q2 比較先クエリ
 * @returns {boolean}
 */
function isEqualQuery(q1, q2) {
    for (var _i = 0, FIELDS_3 = FIELDS; _i < FIELDS_3.length; _i++) {
        var k = FIELDS_3[_i];
        if (k === 'region')
            continue;
        if ((q1 && q1.hasOwnProperty(k) ? q1[k] : '') !== (q2 && q2.hasOwnProperty(k) ? q2[k] : ''))
            return false;
    }
    return true;
}
exports.isEqualQuery = isEqualQuery;
/**
 * クエリを内容のあるプロパティだけにする
 * @param query
 * @returns {Object} query
 */
function stripQuery(query) {
    var tmp = {};
    for (var _i = 0, FIELDS_4 = FIELDS; _i < FIELDS_4.length; _i++) {
        var k = FIELDS_4[_i];
        console.log(query[k]);
        if (query.hasOwnProperty(k) && query[k] && query[k] !== '') {
            tmp[k] = query[k];
        }
    }
    return tmp;
}
exports.stripQuery = stripQuery;
/**
 * マッピングデータを取得する
 * @param region {String} リージョン
 * @param callback(data) コールバック関数
 */
function fetchMapping(region, callback) {
    _request('mapping', {
        'region': region
    }).then(function (r) {
        callback(r);
    });
}
exports.fetchMapping = fetchMapping;
