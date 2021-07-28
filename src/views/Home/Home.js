import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeStyle } from "./Home.styled.js";
import { HomeStyle2 } from "./Home.styled.js";
import { HomeStyle3 } from "./Home3.styled.js";

import boyHome from '../../assets/boyHome.png';

import OnePage from '../../assets/Home/diseno.png';
import MultiPage from '../../assets/Home/MultiPage.png';
import eCommers from '../../assets/Home/eCommers.jpg';
import Diseño from '../../assets/Home/Diseño.jpg';
import App from '../../assets/Home/App.jpg';
import Marketing from '../../assets/Home/Marketing.jpg';
import ERP from '../../assets/Home/ERP.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCoffee } from '@fortawesome/free-solid-svg-icons';

		 



const Home = () => (

<>
<Helmet>
	<title>CheCat | Developers</title>
	<meta name="description" content="Home | Sitio web de desarrollo web y apps" data-react-helmet="true" />
</Helmet>
    <HomeStyle >
		<div className="box1"></div>
		<div className="box2">
			<div className="text">
				<h5><span>che</span>CAT</h5>
			</div>
			<div className="text2">
				<div className="textGhost">
					<p>
						<span>D</span>
						<span>E</span>
						<span>V</span>
						<span>E</span>
						<span>L</span>
						<span>O</span>
						<span>P</span>
						<span>E</span>
						<span>R</span>
						<span>S</span>
					</p>
				</div>
			</div>	
		</div>
	</HomeStyle>

	<HomeStyle2>
	<div className="TitleHome"><h1>¿Qué es <span>che</span>CAT</h1><img src={boyHome} alt="" /></div>
      <p>Somos una empresa dedicada al diseño y desarrollo de software, compuesto por un grupo de jóvenes profesionales con ganas de ayudar a las Pymes con el objetivo de potenciar sus negocios a través de la tecnología, y brindando siempre un servicio adaptado a cada necesidad.</p>

	</HomeStyle2>

	<HomeStyle3>
		<ul class="honeycomb">
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={OnePage} />
				<div class="honeycomb-cell_title">OnePage</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={MultiPage} />
				<div class="honeycomb-cell_title">Multi Sitio</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={eCommers} />
				<div class="honeycomb-cell_title">eCommerce</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={Diseño} />
				<div class="honeycomb-cell_title">Diseño Grafico</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={App} />
				<div class="honeycomb-cell_title">App</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={Marketing} />
				<div class="honeycomb-cell_title">Marketing</div>
			</li>
			<li class="honeycomb-cell">
				<img class="honeycomb-cell_image" src={ERP} />
				<div class="honeycomb-cell_title">ERP</div>
			</li>
			<li class="honeycomb-cell honeycomb_placeholder">
			</li>
		</ul>

		<div class="flex">
			<a href="#0" class="bttn">Ver</a>
		</div>
	</HomeStyle3>

   </>
)

export default Home;