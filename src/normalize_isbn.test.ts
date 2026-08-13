// ISBN の正規化は isbn3 の範囲データに依存するため、依存を上げたときに
// 静かに挙動が変わりうる（過去に isbn-utils/isbnjs で 979-8 が全滅した例がある）。
// PR の時点で気づけるように、代表的な入力を固定しておく。
import {expect, test} from 'vitest'

import normalize_isbn, {normalize_isbn13} from './normalize_isbn'

test('normalize_isbn は10桁に寄せる', () => {
    expect(normalize_isbn('9784873115658')).toBe('4873115655')
    expect(normalize_isbn('4873115655')).toBe('4873115655')
})

test('normalize_isbn13 は13桁に寄せる', () => {
    expect(normalize_isbn13('4873115655')).toBe('9784873115658')
    expect(normalize_isbn13('9784873115658')).toBe('9784873115658')
})

test('ハイフン・全角は無視する', () => {
    expect(normalize_isbn('978-4-87311-565-8')).toBe('4873115655')
    expect(normalize_isbn('４８７３１１５６５５')).toBe('4873115655')
    expect(normalize_isbn13('978-4-87311-565-8')).toBe('9784873115658')
})

test('979 で始まる ISBN13 は10桁にできないので13桁のまま返す', () => {
    expect(normalize_isbn('9798886451740')).toBe('9798886451740')
    expect(normalize_isbn13('9798886451740')).toBe('9798886451740')
})

test('チェックデジット違いと ISBN でない文字列は false を返す', () => {
    expect(normalize_isbn('9784873115659')).toBe(false)
    expect(normalize_isbn('abc')).toBe(false)
    expect(normalize_isbn('')).toBe(false)
    expect(normalize_isbn13('9784873115659')).toBe(false)
    expect(normalize_isbn13('abc')).toBe(false)
})
