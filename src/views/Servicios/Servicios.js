import React from 'react';
import { Helmet } from 'react-helmet';
import './Servicios.css';

import service from '../../assets/img1.png';

let more = document.querySelectorAll('.more');
      for (let i = 0; i <more.length; i++) {
        more[i].addEventListener('click', function(){
          more[i].parentNode.classList.toggle('active')
        })
    }

const Servicios = (more) => (

	

    <>
	<Helmet>
		<title>Servicios | CheCat | Developers</title>
		<meta name="description" content="Servicios | Sitio web de desarrollo web y apps" data-react-helmet="true" />
	</Helmet>
	<div class="container">
      <div class="card">
        <div class="icon">
          <img src={service} alt="" />
        </div>
        <div class="content">
          <h3>Web & Mobile Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <a class="more"></a>
      </div>

      <div class="card">
        <div class="icon">
          <img src={service} alt="" />
        </div>
        <div class="content">
          <h3>Customer Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <a class="more"></a>
      </div>

      <div class="card">
        <div class="icon">
          <img src={service} alt="" />
        </div>
        <div class="content">
          <h3>Marketing & Communication</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <a class="more"></a>
      </div>
    </div>

    </>  
)

export default Servicios;