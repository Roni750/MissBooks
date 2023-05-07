import { LongTxt } from "../cmps/long-txt.jsx"

export function BookDetails({ book, onBack }) {
    const currentYear = new Date().getFullYear()
    const estimatedPublishStatus = currentYear - book.publishedDate > 10 ? 'Vintage' : 'New'
    return (
        <section className="car-details">
            <h1>Book Name: {book.title}</h1>
            <h5>Price: {book.listPrice.amount}</h5>
            <img src={book.thumbnail} alt={book.title}/>
            {(book.listPrice.isOnSale) ? <h4>On Sale</h4> : ''}
            {book.pageCount > 500 && <h5>Serious Reading</h5> || book.pageCount > 200 && <h5>Descent Reading</h5> || book.pageCount < 200 && <h5>Light Reading</h5>}
            {<h5>{estimatedPublishStatus}</h5>}
            <LongTxt bookDescription={book.description} length={90}/>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p> */}
            <button onClick={onBack}>Back</button>
        </section>
    )
}