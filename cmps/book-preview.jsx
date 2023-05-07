export function BookPreview({ book }) {
    console.log("bookPreview:", book)
    return (
        <article className="car-preview">
            <h2>Book Name: {book.title}</h2>
            <h4>Price: {book.listPrice.amount}</h4>
            {book.pageCount > 500 && <h5>Serious Reading</h5> || book.pageCount > 200 && <h5>Descent Reading</h5> || book.pageCount < 200 && <h5>Light Reading</h5>}
            {/* <img src={`../assets/img/${car.vendor}.png`} alt="" /> */}
        </article>
    )
}