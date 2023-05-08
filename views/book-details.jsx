const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { LongTxt } from "../cmps/long-txt.jsx"
import { bookService } from "../services/book.service.js"
import { AddReview } from "./add-review.jsx"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])
    
    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('Had issues in book details:', err);
                navigate('/book')
            })
    }

    function onBack() {
        navigate('/book')
    }

    function getEstPublishStatus() {
        const currentYear = new Date().getFullYear()
        if ((currentYear - book.publishedDate) > 10) return 'Vintage'
        else if ((currentYear - book.publishedDate) === 1) return 'New'
        else return ''
    }

    function getEstReadingLvl() {
        if (book.pageCount > 500) return <h5 className="tag">Serious Reading</h5>
        else if (book.pageCount > 200) return <h5 className="tag">Descent Reading</h5>
        else if (book.pageCount < 200) return <h5 className="tag">Light Reading</h5>
    }

    function isOnSale() {
        if(book.listPrice.isOnSale) return <h5 className="tag">On Sale</h5>
        else return
    }

    if (!book) return <div><p>No car found</p></div>
    return (
        <section className="book-details">
            <h1>Book Name: {book.title}</h1>
            <h5 className="price">Price: {book.listPrice.amount}</h5>
            <img src={book.thumbnail} alt={book.title} />
            <div className="tags-container flex flex-row">
                {isOnSale()}
                {getEstReadingLvl()}
                {(getEstPublishStatus() && <h5 className="tag">{getEstPublishStatus()}</h5>)}
            </div>
            <LongTxt bookDescription={book.description} length={90} />
            <AddReview bookId={book.id}/><h2>Add Review</h2>
            <button onClick={onBack}>Back</button>
        </section>
    )
}