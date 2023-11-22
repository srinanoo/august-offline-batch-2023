import "./Header.css";
// import headerClass from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <>
            {/* <h2 className="title">Header Component</h2> */}
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/blog">Blog</a>
            </nav>
            <br />
            <nav>
                <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/blog">Blog</NavLink>
            </nav>
            <br />
            <nav>
                <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/blog">Blog</NavLink>
            </nav>
        </>
    )
}