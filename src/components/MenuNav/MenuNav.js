import React from 'react';
import { Link } from 'react-router-dom';
import './MenuNav.css';


const MenuNav = () => {

	return (

		<ul className="menuConten">
           <li> <Link  className="menu-item" to="/">Home</Link></li>
           <li> <Link  className="menu-item" to="/Acerca">Acerca</Link></li>
           <li> <Link  className="menu-item" to="/Servicios">Servicios</Link></li>
           <li> <Link  className="menu-item" to="/Contacto">Contacto</Link></li>
        </ul>
	);
}

export default MenuNav;