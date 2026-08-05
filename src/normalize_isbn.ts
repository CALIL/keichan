import ISBN from 'isbn3';

// ISBNをなるべく10桁に統一する
// 不正なISBNの場合はfalseを返す
function normalize_isbn(isbn) {
    isbn = isbn.normalize('NFKC').toUpperCase().replace(/[^0-9X]/g, '');
    const parsed = ISBN.parse(isbn) ?? ISBN.parse('978' + isbn);
    if (!parsed) {
        return false;
    }
    // 979始まりのISBN13は10桁に変換できないので、isbn10を持たない
    return parsed.isbn10 ?? parsed.isbn13;
}

export default normalize_isbn;


// ISBNを13桁に統一する
// 不正なISBNの場合はfalseを返す
export const normalize_isbn13 = (isbn) => {
    isbn = isbn.normalize('NFKC').toUpperCase().replace(/[^0-9X]/g, '');
    const parsed = ISBN.parse(isbn);
    return parsed ? parsed.isbn13 : false;
}
