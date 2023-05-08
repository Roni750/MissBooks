const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function AddReview({ bookId }) {
    const [reviewToEdit, setReviewToEdit] = useState(bookService.getEmptyReview())
    console.log("reviewToEdit:", reviewToEdit)

    function onSaveReview(ev) {
        ev.preventDefault()
        bookService.addReview(bookId, reviewToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        console.log("target.type:", target.type)
        const value = target.type === 'select-one' ? (+target.value || '') : target.value
        setReviewToEdit(prevReview => ({ ...prevReview, [field]: value }))
    }

    return (
        <section className="review-edit">
            <form onSubmit={onSaveReview} >
                <label htmlFor="fullname">Full name:</label>
                <input onChange={handleChange} type="text" name="fullname" id="fullname" />
                <br />
                <label htmlFor="rating">Rate:</label>
                <select onChange={handleChange} name="rating" id="rating">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <br/>
                <label htmlFor="readAt">Read at:</label>
                <input type="date" id="readAt" name="readAt" onChange={handleChange}></input>
                {/* <input onChange={handleChange} value="" type="select" name="rating" id="rating" /> */}
                {/* <button>{articleToEdit.id ? 'Save' : 'Add'}</button> */}
                <button>Save</button>
            </form>

        </section>
    )
}