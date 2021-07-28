import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import logoMenu from '../../assets/Checat.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Menu.css';

export default props => {
	return (
	  // Pass on our props
	  <Menu right {...props}>
		  <a className="logo-movil">
				<img src={logoMenu} alt="" />
			</a>
		<Link  class="menu-item" to="/">Home</Link>
		<Link  class="menu-item" to="/Acerca">Acerca</Link>
		<Link  class="menu-item" to="/Servicios">Servicios</Link>
		<Link  class="menu-item" to="/Contacto">Contacto</Link>
	  </Menu>
	);
  };

