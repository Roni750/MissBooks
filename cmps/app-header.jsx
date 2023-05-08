const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ onSetPage }) {
    return (
        <header className="app-header full main-layout">
            <h1>Books App</h1>
            <nav className="app-nav">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/book" >Books</NavLink>
                <NavLink to="/about" >About</NavLink>
            </nav>
        </header>
    )
}