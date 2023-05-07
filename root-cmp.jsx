const { useState } = React

import { About } from "./views/about.jsx";
import { BookIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {

    const [page, setPage] = useState('bookIndex')


    function handlePageChange(page) {
        setPage(page)
    }


    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>Books App</h1>
                <nav className="app-nav">
                    <a onClick={() => handlePageChange('home')} href="#">Home</a> |
                    <a onClick={() => handlePageChange('bookIndex')} href="#">Books Index |</a>
                    <a onClick={() => handlePageChange('about')} href="#">About</a>
                </nav>
            </header>
            <main>
                {page === 'home' && <Home />}
                {page === 'bookIndex' && <BookIndex />}
                {page === 'about' && <About />}
            </main>
        </section>
    )
} 