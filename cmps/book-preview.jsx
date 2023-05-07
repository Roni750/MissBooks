import { LongTxt } from "./long-txt.jsx"

export function BookPreview({ book }) {
    const currentYear = new Date().getFullYear()
    const estimatedPublishStatus = currentYear - book.publishedDate > 10 ? 'Vintage' : 'New'
    const bookPriceClass = book.listPrice.amount > 150 ? 'high-price-tag' : 'low-price-tag'
    // const isOnSale = (book.listPrice.isOnSale) ? 'On Sale' : '' 
    return (
        <article className="car-preview">
            <h2>{book.title}</h2>
            <h4 className={bookPriceClass}>Price: {book.listPrice.amount}</h4>
            {(book.listPrice.isOnSale) ? <h4>On Sale</h4> : ''}
            {/* <h4>{isOnSale}</h4> */}
            <LongTxt bookDescription={book.description} length={40}/>
            {book.pageCount > 500 && <h5>Serious Reading</h5> || book.pageCount > 200 && <h5>Descent Reading</h5> || book.pageCount < 200 && <h5>Light Reading</h5>}
            {<h5>{estimatedPublishStatus}</h5>}
            {/* <img src={`../assets/img/${car.vendor}.png`} alt="" /> */}
        </article>
    )
}