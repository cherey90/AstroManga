import React from 'react';
import { Helmet } from 'react-helmet';
import './Contacto.css';

const Contacto = () => (
    <>
	<Helmet>
		<title>Contacto | CheCat | Developers</title>
		<meta name="description" content="Contacto | Sitio web de desarrollo web y apps" data-react-helmet="true" />
	</Helmet>

    <section className="page-header-section set-bg" data-setbg="img/header-bg-2.jpg">
		<div className="container">
			<h1 className="header-title">Contact<span>.</span></h1>
		</div>
	</section>


    <section className="page-section pt100">
		<div className="container pb100">
			<div className="section-title pt-5">
				<h1>Get in touch</h1>
			</div>
			<div className="row">
				<div className="col-lg-3 contact-info mb-5 mb-lg-0">
					<p>Address: 1481 Creekside Lane Avila Beach, CA 93424 </p>
					<p>Phone: +53 345 7953 32453</p>
					<p>Email: yourmail@gmail.com</p>
					<div className="cf-social">
						<a href="#"><i class="fa fa-google-plus"></i></a>
						<a href="#"><i class="fa fa-pinterest"></i></a>
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
					</div>
				</div>
				<div className="col-lg-9">
					<form className="contact-form">
						<input type="text" placeholder="Enter your name" />
						<input type="text" placeholder="Enter your email address" />
						<textarea placeholder="Message ..."></textarea>
						<button className="site-btn sb-dark">Send</button>
					</form>
				</div>
			</div>
		</div>
		<div className="map-area" id="map-canvas"></div>
	</section>

    

    </>
)

export default Contacto;