const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader} from "./cmps/app-header.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"
import { About } from "./views/about.jsx"
import { BookDetails } from "./views/book-details.jsx"
import { ReviewList } from "./cmps/review-list.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { Home } from "./views/home.jsx"

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <Router>
        <section className="app main-layout">

        <AppHeader onSetPage={onSetPage} />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book" element={<BookIndex />} />
                    <Route path="/book/:bookId" element={<BookDetails />} />
                    <Route path="/book/edit/" element={<BookEdit />} />
                    <Route path="/book/edit/:bookId" element={<BookEdit />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <UserMsg />
        </section>
        </Router>
    )
} 