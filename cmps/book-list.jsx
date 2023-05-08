const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook }) {

    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                        {/* <button onClick={() => onSelectBook(book)}>Display Book</button> */}
                        <button><Link to={`/book/${book.id}`}>Details</Link></button>
                    </section>
                </li>
            )}
        </ul>
    )
}