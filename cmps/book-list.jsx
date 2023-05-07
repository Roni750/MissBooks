import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook, onSelectBook }) {

    return (
        <ul className="car-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                        <button onClick={() => onSelectBook(book)}>Display Book</button>
                    </section>
                </li>
            )}
        </ul>
    )
}