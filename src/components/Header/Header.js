import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoMovil from '../../assets/ChecatHead.png';
import logoDesktop from '../../assets/Checat.png';
import Menu from '../Menu';
import MenuNav from '../MenuNav';


const Header = () => {

	return (

		<header>
			<Link to="/" className="logo-movil">
				<img src={logoMovil} alt="" />
			</Link>

			<Link to="/" className="logo-desktop">
				<img src={logoDesktop} alt="" />
			</Link>

			{/* <div class="header-title">
				<div class="lightbar"></div>
				<div class="topLayer"></div>
				<h2>CheCat</h2>
			</div> */}
			
			<Menu />
			<MenuNav />
		</header>
	);
}

export default Header;