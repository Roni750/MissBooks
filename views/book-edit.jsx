const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Error occurred:', err);
                navigate('/book')
                showErrorMsg('Book not found!')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        if (field === 'amount') {
            setBookToEdit(prevBook => ({ ...prevBook, listPrice: { ...prevBook.listPrice, amount: value } }))
        }
        setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => {
                showSuccessMsg('Book Saved!')
                navigate('/book')
            })
    }

    const { title, listPrice: { amount } } = bookToEdit
    return (
        <section className="book-edit">
            <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

            <form onSubmit={onSaveBook} >
                <label htmlFor="title">Book name:</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />
                <br />
                <label htmlFor="amount">Price:</label>
                <input onChange={handleChange} value={amount || 0} type="number" name="amount" id="amount" />
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
            </form>

        </section>
    )
}