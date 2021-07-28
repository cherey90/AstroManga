import React from 'react';
import './Footer.css';

import logofooter from '../../assets/ChecatHead.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

	return (
		<>
		<footer>
      <div class="row">
        <div class="col">
        <img src={logofooter} class="logo" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div class="col">
          <h3>Oficina <div class="underline"><span></span></div> </h3>
          <p>Checat</p>
          <p>Comodoro Rivadavia, Chubut</p>
          <p>Av. Lisandro de la Torre 2061</p>
          <p class="email-id">checat@gmail.com</p>
          <h4>+549 - 297 514 4422</h4>
          <h4>+549 - 11 3447 1537</h4>
        </div>

        <div class="col">
          <h3>Liks <div class="underline"><span></span></div> </h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div class="col">
          <h3>Newsletter <div class="underline"><span></span></div> </h3>
          <form>
            <i class="far fa-envelope"></i>
            <input type="email" placeholder="Ingrese su email" required name="" />
            <button type="submit"><i class="far fa-arrow-right"></i></button>
          </form>
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>

      </div>
      <hr />
      <p class="copyright">Checat ©  2021 - Todos los derechos reservados</p>
    </footer>
	</>
	);
}

export default Footer;