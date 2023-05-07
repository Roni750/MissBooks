import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    // ! DRY!. WE WILL NEVER REPEAT OUR SELVES
    // function handleTxtChange({ target }) {
    //     const value = target.value
    //     setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, txt: value }))
    // }

    // function handleMinSpeedChange({ target }) {
    //     const value = target.value
    //     setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, minSpeed: value }))
    // }

    const { txt, maxPrice, publishDate } = filterByToEdit
    return (
        <section className="car-filter">
            <h2>Filter Our Books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Book title:</label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="By title" />

                <label htmlFor="maxPrice">Max price:</label>
                <input value={maxPrice} onChange={handleChange} type="number" name="maxPrice" id="maxPrice" placeholder="By max price" />

                <label htmlFor="publishDate">Published since:</label>
                <input value={publishDate} onChange={handleChange} type="number" name="publishDate" id="publishDate" placeholder="By publish date" />

                <button>Filter Books</button>
            </form>

        </section>
    )
}