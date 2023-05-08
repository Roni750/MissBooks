export function BookPreview({ book }) {
    const bookPriceClass = book.listPrice.amount > 150 ? 'high-price-tag' : 'low-price-tag'

    function isOnSale() {
        // if(book.listPrice.isOnSale) return <h5 className="tag">On Sale</h5>
        if(book.listPrice.isOnSale) return <img className="on-sale-sign" src="../assets/resources/on-sale-sign.png" />
    }

    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <h4>{book.subtitle}</h4>
            <img src={book.thumbnail} alt={book.title}/>
            <h4 className={bookPriceClass}>Price: {book.listPrice.amount}</h4>
            {isOnSale()}
        </article>
    )
}