import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h1>🐶 Puppy Bowl</h1>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/players/new" className="nav-link">Add Player</Link>
            </div>
        </nav>
    );
};

export default NavBar;