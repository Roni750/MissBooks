// import { CarFilter } from "../cmps/car-filter.jsx"
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book.service.js"
// import { CarDetails } from "./car-details.jsx"

const { useEffect, useState } = React

export function BookIndex() {

    const [books, setBooks] = useState([])
    // const [selectedCar, setSelectedCar] = useState(null)
    // const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    console.log("books:", books)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query().then(books => setBooks(books))
        // bookService.query(filterBy).then(cars => setCars(cars))
        // carService.query().then(setCars)
    }

    // function onRemoveCar(carId) {
    //     bookService.remove(carId).then(() => {
    //         const updatedCars = cars.filter(car => car.id !== carId)
    //         setCars(updatedCars)
    //     })
    // }

    // function onSetFilter(filterBy) {
    //     setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    // }

    // function onSelectCar(car){
    //     setSelectedCar(car)
    // }

    console.log('render');
    return (
        <section className="car-index">
            {/* {!selectedCar && <React.Fragment> */}
                {/* <CarFilter onSetFilter={onSetFilter} filterBy={filterBy} /> */}
                {/* <CarList onSelectCar={onSelectCar} cars={cars} onRemoveCar={onRemoveCar} /> */}
                <BookList books={books}/>
            {/* </React.Fragment>} */}

            {/* {selectedCar && <CarDetails onBack={()=>setSelectedCar(null)} car={selectedCar} />} */}
        </section>
    )
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