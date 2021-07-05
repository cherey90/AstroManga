import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/ChecatHead.png';
import Menu from '../Menu';


const Header = () => {

	return (

		<header className="header-area">
			<Link to="/" className="logo-area">
				<img src={logo} alt="" />
			</Link>
			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>
			<div className="phone-number">+675 334 567 223</div>
			
			<Menu />
		</header>
	);
}

export default Header;