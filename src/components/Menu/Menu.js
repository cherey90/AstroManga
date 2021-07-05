import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {

	return (
		
		<nav className="nav-menu">
			<ul>
				<li className="active"><Link to="/">Home</Link></li>
				<li><Link to="/Acerca">Acerca</Link></li>
				<li><Link to="/Servicios">Servicios</Link></li>
				<li><Link to="/Contacto">Contacto</Link></li>
			</ul>
		</nav>
	);
}

export default Menu;