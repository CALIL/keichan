import isbn_utils from 'isbn-utils';
import unorm from 'unorm';

// ISBNをなるべく10桁に統一する
// 不正なISBNの場合はfalseを返す
function normalize_isbn(isbn) {
    isbn = unorm.nfkc(isbn).toUpperCase().replace(/[^0-9X]/g, '');
    let i = isbn_utils.parse(isbn);
    if (i) {
        if (i.isIsbn10()) {
            return i.asIsbn10();
        } else if (i.isIsbn13()) {
            let s = i.asIsbn13();
            if (s.startsWith('978')) {
                return i.asIsbn10();
            } else {
                return i.asIsbn13();
            }
        }
    } else {
        let i2 = isbn_utils.parse('978' + isbn);
        if (i2 && i2.isIsbn13()) {
            return i2.asIsbn10();
        }
    }
    return false;
}

export default normalize_isbn;


// ISBNを13桁に統一する
// 不正なISBNの場合はfalseを返す
export const normalize_isbn13 = (isbn) => {
    isbn = unorm.nfkc(isbn).toUpperCase().replace(/[^0-9X]/g, '');
    let i = isbn_utils.parse(isbn);
    if (i) {
        if (i.isIsbn10()) {
            return i.asIsbn13();
        } else if (i.isIsbn13()) {
            return i.asIsbn13();
        }
    }
    return false;
}
