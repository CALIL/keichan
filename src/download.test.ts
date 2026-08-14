// @vitest-environment jsdom
//
// file-saver の saveAs を標準機能に置き換えたので、同じ順序で動いているかを見る。
// object URL の解放が click より前に来ると、ブラウザによってはダウンロードが
// 始まる前に URL が無効になり、保存が無言で失敗する。
// jsdom は createObjectURL も a 要素の click によるダウンロードも実装していないので、
// そこは差し替えて呼ばれ方だけを確認する。
import {afterEach, expect, test, vi} from 'vitest'

import download from './download'

const originalCreateObjectURL = URL.createObjectURL
const originalRevokeObjectURL = URL.revokeObjectURL

afterEach(() => {
    URL.createObjectURL = originalCreateObjectURL
    URL.revokeObjectURL = originalRevokeObjectURL
    vi.restoreAllMocks()
})

test('object URL を付けた a 要素を click してから解放する', () => {
    const events: string[] = []

    URL.createObjectURL = vi.fn(() => {
        events.push('create')
        return 'blob:keichan-test'
    })
    URL.revokeObjectURL = vi.fn((url: string) => {
        events.push('revoke:' + url)
    })
    vi.spyOn(HTMLElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
        events.push('click:' + this.download + ':' + this.href)
    })

    download(new Blob(['{}'], {type: 'application/json'}), 'keichanData.json')

    expect(events).toEqual([
        'create',
        'click:keichanData.json:blob:keichan-test',
        'revoke:blob:keichan-test',
    ])
})
