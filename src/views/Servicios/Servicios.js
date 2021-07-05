import React from 'react';
import { Helmet } from 'react-helmet';
import './Servicios.css';

import headerbg from '../../assets/header-bg.jpg';

//Servicios
import service1 from '../../assets/icon/dark/1.png';
import service2 from '../../assets/icon/dark/2.png';
import service3 from '../../assets/icon/dark/3.png';
import service4 from '../../assets/icon/dark/4.png';
import service5 from '../../assets/icon/dark/5.png';
import service6 from '../../assets/icon/dark/6.png';

//Servicios2
import servivio1 from '../../assets/service/1.jpg';
import servivio2 from '../../assets/service/2.jpg';
import servivio3 from '../../assets/service/3.jpg';

const Servicios = () => (

    <>
	<Helmet>
		<title>Servicios | CheCat | Developers</title>
		<meta name="description" content="Servicios | Sitio web de desarrollo web y apps" data-react-helmet="true" />
	</Helmet>
        <section className="page-header-section set-bg" data-setbg={headerbg}>
            <div className="container">
                <h1 className="header-title">Services<span>.</span></h1>
            </div>
        </section>

        <section className="intro-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<div className="service-slider">
						<div className="ss-single">
							<img src={servivio1} alt="" />
						</div>
						<div className="ss-single">
							<img src={servivio2} alt="" />
						</div>
						<div className="ss-single">
							<img src={servivio3} alt="" />
						</div>
					</div>
				</div>
				<div className="col-lg-7 service-text">
					<h1>We offer top quality project <span>services</span></h1>
					<h2>01.Super-fast support.</h2>
					<p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. </p>
					<ol>
						<li>02.Detailed documentation. </li>
						<li>03.Clean code.</li>
						<li>04.Great themes.</li>
					</ol>
				</div>
			</div>
		</div>
	</section>

    <div className="service-box-section spad set-bg" data-setbg="img/service-bg.jpg">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="solid-service-box">
						<h2>01.</h2>
						<h3>The idea</h3>
						<p>Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae nisl sagittis grav ida ut sit amet diam.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="solid-service-box">
						<h2>02.</h2>
						<h3>Behind the work</h3>
						<p>Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae nisl sagittis grav ida ut sit amet diam.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-12">
					<div className="solid-service-box">
						<h2>03.</h2>
						<h3>The Success</h3>
						<p>Fusce commodo tincidunt convallis. <br /> Nunc at purus vitae nisl sagittis grav ida ut sit amet diam.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
			</div>
		</div>
	</div>

    <section className="service-section spad">
		<div className="container">
			<div className="section-title">
				<h1>Services</h1>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service1} alt="" />
							</div>
						</div>
						<h3>Plans and Projects</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service2} alt="" />
							</div>
						</div>
						<h3>Conceptual Architecture</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service3} alt="" />
							</div>
						</div>
						<h3>Apartment Buildings</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service4} alt="" />
							</div>
						</div>
						<h3>Skyscrapers Buildings</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service5} alt="" />
							</div>
						</div>
						<h3>Documentation</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="service-box">
						<div className="sb-icon">
							<div className="sb-img-icon">
								<img src={service6} alt="" />
							</div>
						</div>
						<h3>Restauration Projects</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dui eget lorem tincidunt.</p>
						<a href="#" className="readmore">READ MORE</a>
					</div>
				</div>
			</div>
		</div>
	</section>

    <section className="promo-section pt-0">
		<div className="promo-box set-bg" data-setbg="img/bg.jpg">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 promo-text">
						<h1>In need of a <span>fabulouse</span> home?</h1>
						<p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus.</p>
					</div>
					<div className="col-lg-3 text-lg-right">
						<a href="#" className="site-btn sb-light mt-4">Get in Touch</a>
					</div>
				</div>
			</div>
		</div>
	</section>

    </>  
)

export default Servicios;