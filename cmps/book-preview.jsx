export function BookPreview({ book }) {
    const bookPriceClass = book.listPrice.amount > 150 ? 'high-price-tag' : 'low-price-tag'
    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <h4>{book.subtitle}</h4>
            <img src={book.thumbnail} alt={book.title}/>
            <h4 className={bookPriceClass}>Price: {book.listPrice.amount}</h4>
        </article>
    )
}