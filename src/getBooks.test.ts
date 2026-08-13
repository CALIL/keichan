// getBibHash は書誌の同一性判定に使うので、同じ書誌からは常に同じ値が出る必要がある。
// sha1 の実装やエンコードの都合で値が変わると、既存データとの突き合わせが静かに壊れる。
// 依存を上げたときに気づけるよう、期待値を固定しておく。
import {expect, test} from 'vitest'

import {getBibHash} from './getBooks'

test('同じ書誌からは同じハッシュが出る', () => {
    const book = {id: 'a', title: 'b', author: 'c', publisher: 'd', isbn: '9784873115658'}
    expect(getBibHash(book)).toBe('1b1455130dde23a11fb36e8bc5f75c936781ce73')
})

test('書誌が違えば違うハッシュになる', () => {
    const a = getBibHash({id: 'a', title: 'b', author: 'c', publisher: 'd', isbn: '9784873115658'})
    const b = getBibHash({id: 'a', title: 'b', author: 'c', publisher: 'd', isbn: '9784873115659'})
    expect(a).not.toBe(b)
})
