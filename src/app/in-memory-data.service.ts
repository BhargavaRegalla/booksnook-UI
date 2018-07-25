import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const books = [ { 
            book_id: 1234,
            book_category_id: 1,
            book_name: 'Answer and Question',
            book_desc: 'Very good book for competative exams',
            book_price: 250,
            book_author:'Martin John' ,
            book_image_url:' pari ',
            book_rating: 5 
            },
        ];
        return { books };
    }
}