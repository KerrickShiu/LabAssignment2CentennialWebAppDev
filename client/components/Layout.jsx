import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function Layout() {
return (
<>
<h1>My Portfolio</h1>
<img src={logo} length ='125em'width='125em'></img>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link
to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link to="/services">Services</Link> | <Link
to="/contact">Contact</Link> | <Link
to="/counter">Rate My Website</Link>
</nav>
<br/>
<hr />
</>
);
}