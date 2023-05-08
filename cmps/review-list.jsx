import { ReviewPreview } from "./review-preview.jsx"

const { useState, useEffect } = React

export function ReviewList({ book }) {
    const [reviews, reviewsToSet] = useState(book.reviews)

    if (!reviews) return
    return (
        <ul className="book-list">
            {console.log("review:", reviews)}
            {reviews.map((review, idx) =>
                <li key={review.id}>
                    <ReviewPreview book={book} idx={idx}/>
                </li>
            )}
        </ul>
    )
}
