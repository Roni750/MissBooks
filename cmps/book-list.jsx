import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook, onSelectBook }) {

    return (
        <ul className="car-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        {/* <button onClick={() => onRemoveCar(car.id)} >Remove Car</button> */}
                        {/* <button onClick={() => onSelectCar(car)} >Select Car</button> */}
                    </section>
                </li>
            )}
        </ul>
    )
}