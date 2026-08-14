// Blobをファイルとしてダウンロードさせる
// file-saver の saveAs の代替。中身は Blob を object URL にして
// download 属性付きの a 要素を click するだけなので、標準機能で足りる
const download = (blob: Blob, fileName: string): void => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()
    URL.revokeObjectURL(url)
}

export default download;
