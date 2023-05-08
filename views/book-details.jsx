import { LongTxt } from "../cmps/long-txt.jsx"

export function BookDetails({ book, onBack }) {
    const currentYear = new Date().getFullYear()
    const estimatedPublishStatus = currentYear - book.publishedDate > 10 ? 'Vintage' : 'New'
    return (
        <section className="book-details">
            <h1>Book Name: {book.title}</h1>
            <h5 class="price">Price: {book.listPrice.amount}</h5>
            <img src={book.thumbnail} alt={book.title}/>
            <div className="tags-container flex flex-row">
            {(book.listPrice.isOnSale) ? <h5 class="tag">On Sale</h5> : ''}
            <div class="tag">{book.pageCount > 500 && <h5>Serious Reading</h5> || book.pageCount > 200 && <h5>Descent Reading</h5> || book.pageCount < 200 && <h5>Light Reading</h5>}</div>
            {<h5 class="tag">{estimatedPublishStatus}</h5>}</div>
            <LongTxt bookDescription={book.description} length={90}/>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p> */}
            <button onClick={onBack}>Back</button>
        </section>
    )
}