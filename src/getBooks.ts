import isbn_utils from 'isbn-utils'
import api from './api.js'
import normalize_isbn from './normalize_isbn.js'

import sha1 from 'sha1'

// タグに半角カナが入るので変換用
function hankana2Zenkana(str) {
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
};

export const getBook = async (isbn, region) => {
    return new Promise(async (resolve, reject) => {
        const apiInstance = new api({ isbn: isbn, region: region }, async (data) => {
            // console.log(data)
            if (data.count >= 1) {
                apiInstance.kill()
                const b = data.books[0]
                const book: any = {
                    id: b.id,
                    title: b.title,
                    author: b.author,
                    publisher: b.publisher,
                    pubdate: b.pubdate,
                    isbn: b.isbn,
                    tags: [],
                    price: '',
                    cCode: '',
                    source: 'unitrad'
                }
                book.bibHash = getBibHash(book)
                let i = isbn_utils.parse(normalize_isbn(book.isbn))
                if (i) book.isbn = i.asIsbn13()
                const openBDBooks = await getOpenBD([book.isbn]) as any[]
                if (openBDBooks.length > 0) {
                    openBDBooks[0].id = book.id
                    resolve(openBDBooks[0])
                } else {
                    resolve(book)
                }
            } else if (data.running === false && data.count === 0) {
                reject()
            }
        })
    })
}

export const getBooks = async (targetBook, region) => {
    // console.log(book)

    const author = targetBook.author.split(',')[0]
    const publisher = targetBook.publisher
    const pubdate = targetBook.pubdate

    return new Promise(async (resolve, reject) => {

        let apiInstance = new api({ author: author, publisher: publisher, year_start: pubdate, region: region }, async (data) => {
            if (apiInstance.killed) return
            if (data.count > 5) apiInstance.kill()
            console.log(data)
            if (data.count >= 1) {
                const books = []
                data.books.forEach((book => {
                    if (book.isbn === null) return
                    let pubdate = 0
                    if (book.pubdate) {
                        if (typeof (book['pubdate']) !== 'string') {
                            pubdate = book.pubdate
                        } else {
                            pubdate = Number(book.pubdate.split('/')[0].split('.')[0])
                        }
                    }
                    let i = isbn_utils.parse(normalize_isbn(book.isbn))
                    let isbn = null
                    if (i) isbn = i.asIsbn13()
                    if (isbn) {
                        books.push({
                            'title': book.title + ' ' + book.volume,
                            'author': book.author.split(',')[0],
                            'publisher': book.publisher,
                            'isbn': isbn,
                            'pubdate': pubdate,
                            'source': 'unitrad'
                        })
                    }
                }))


                books.sort(function (a, b) {
                    if (a.isbn < b.isbn) return -1
                    if (a.isbn > b.isbn) return 1
                    return 0
                })
                let newBooks = []
                const excludeBooks = []
                let excludeTargetBook = false
                books.forEach((book) => {
                    if (book.isbn !== targetBook.isbn) {
                        if (excludeTargetBook) {
                            newBooks.push(book)
                        } else {
                            excludeBooks.push(book)
                        }
                    }
                    if (book.isbn === targetBook.isbn) excludeTargetBook = true
                })
                newBooks = newBooks.concat(excludeBooks)

                const isbns = []
                newBooks.forEach((book) => {
                    isbns.push(book.isbn)
                })
                const openBDBooks = await getOpenBD(isbns)
                resolve(openBDBooks)
            }
        })
    })
}

export const getOpenBD = async (isbns) => {
    return new Promise(async (resolve, reject) => {

        const openBDData = await fetch('https://api.openBD.jp/v1/get?isbn=' + isbns.join(',')).then(r => r.json())
        // console.log(openBDData)

        const openBDBooks = []
        openBDData.forEach((book) => {
            if (book) {
                const tags = []
                try {
                    book.onix.DescriptiveDetail.Collection.TitleDetail.TitleElement.forEach((title, i) => {
                        // console.log(title)
                        // console.log(title.TitleText.content)
                        if (!tags.includes(title.TitleText.content)) {
                            tags.push(hankana2Zenkana(title.TitleText.content))
                        }
                    })
                } catch { }

                let volume = book.summary.volume
                try {
                    // console.log(book.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber)
                    if (volume === '') {
                        volume = book.onix.DescriptiveDetail.TitleDetail.TitleElement.PartNumber.split(';')[0]
                        if (book.summary.title.match(volume)) volume = ''
                    }
                } catch { }

                let price = ''
                try {
                    // console.log(book.onix.ProductSupply.SupplyDetail.Price)
                    book.onix.ProductSupply.SupplyDetail.Price.some((p) => {
                        if (p.CurrencyCode=== 'JPY') {
                            price = p.PriceAmount
                        }
                    })
                } catch { }

                let cCode = ''
                try {
                    // console.log(book.onix.DescriptiveDetail.Subject)
                    book.onix.DescriptiveDetail.Subject.some((s) => {
                        if (s.SubjectSchemeIdentifier=== '78') {
                            cCode = s.SubjectCode
                        }
                    })
                } catch { }


                const openBDBook: any = {
                    'title': [book.summary.title, volume].join(' '),
                    'author': book.summary.author,
                    'publisher': book.summary.publisher,
                    'isbn': book.summary.isbn,
                    'pubdate': book.summary.pubdate,
                    'cover': book.summary.cover,
                    'tags': tags,
                    'price': price,
                    'cCode': cCode,
                    'source': 'opendBD'
                }
                openBDBook.bibHash = getBibHash(openBDBook)
                openBDBooks.push(openBDBook)
            }
        })
        resolve(openBDBooks)
    })
}


export const getBibHash = (book: any) => {
    return sha1(book.id + book.title + book.author + book.publisher + book.isbn)
}
