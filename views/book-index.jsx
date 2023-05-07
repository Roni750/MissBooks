import { BookFilter } from "../cmps/book-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { BookDetails } from "./book-details.jsx"
import { bookService } from "../services/book.service.js"

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => setBooks(books))
        // bookService.query().then(books => setBooks(books))
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    function onSelectBook(book){
        console.log("book:", book)
        setSelectedBook(book)
    }

    console.log('render');
    return (
        <section className="car-index">
            {!selectedBook && <React.Fragment>
                <BookFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                <BookList books={books} onSelectBook={onSelectBook} onRemoveBook={onRemoveBook}/>
            </React.Fragment>}
                {selectedBook && <BookDetails onBack={()=>setSelectedBook(null)} book={selectedBook} />}
        </section>
    )


    // * OLD VERSION
    // return (
    //     <section className="car-index">
    //         {!selectedCar && <React.Fragment>
    //             <CarFilter onSetFilter={onSetFilter} filterBy={filterBy} />
    //             <CarList onSelectCar={onSelectCar} cars={cars} onRemoveCar={onRemoveCar} />
    //         </React.Fragment>}

    //         {selectedCar && <CarDetails onBack={()=>setSelectedCar(null)} car={selectedCar} />}
    //     </section>
    // )
}