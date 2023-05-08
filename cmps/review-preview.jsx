export function ReviewPreview({ book, idx }) {
    console.log("book:", book)

    return (
        <ul className="book-list">
            <li key={book.reviews[idx].id}>
                <section>
                    <h4>Review by:</h4>
                    <p>{book.reviews[idx].fullName}</p>
                    <h4>Rating:</h4>
                    <p>{book.reviews[idx].rating}</p>
                    <h4>Read at:</h4>
                    <p>{book.reviews[idx].readAt}</p>
                </section>
            </li>
    </ul>
    )
}