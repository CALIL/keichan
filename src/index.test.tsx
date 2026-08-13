// @vitest-environment jsdom
//
// マウントスモークテスト。
// ビルドや型チェックでは検出できない「マウント時に例外が出て画面が真っ白になる」
// 事故(2026-08-07 に別リポジトリで React 19 化により semantic-ui-react 内部の
// findDOMNode がクラッシュし、本番が4日間白画面になった)を PR の時点で捕まえる。
// index.tsx は末尾で createRoot().render() を実行するので、#app を用意してから
// 動的 import することで本番と同じ経路(OverlaysProvider ごと)を検証する。
import {expect, test, vi} from 'vitest'

test('エントリを読み込むと #app に描画される', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    // 初期表示では検索は走らないが、念のため実 API を叩かないようにする
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error('テストではAPIを呼ばない'))))

    await import('./index')

    // React 19 の createRoot は非同期にコミットされるのでマイクロタスクを1周待つ
    await new Promise((resolve) => setTimeout(resolve, 0))

    const app = document.getElementById('app')!
    expect(app.children.length).toBeGreaterThan(0)
    // 描画が空の div だけになっていないか、主要な見出しまで見る
    expect(app.textContent).toContain('keichan')
})
