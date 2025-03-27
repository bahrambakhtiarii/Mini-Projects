import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul className = "navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks/new">Add New Task</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;