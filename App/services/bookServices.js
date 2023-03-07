import {API_BOOK_URI, API_BOOK_KEY} from '@env'
import {request} from "./request";

export const bookServices = {
    scan
}

function scan(isbn) {
    const success = response => {
        if (response.data.items) {
            const book = response.data.items[0]

            return {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                //image: book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                image: "http://books.google.com/books/content?id=rso5MQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
            }
        } else {
            return null
        }
    }

    return request(
        'GET',
        `${API_BOOK_URI}isbn:${isbn}&langRestrict=fr${API_BOOK_KEY}`,
        success,
    )
}