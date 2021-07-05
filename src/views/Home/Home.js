import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

import intro from '../../assets/intro.png';
import bg from '../../assets/bg.jpg';

//Servicios
import service1 from '../../assets/icon/dark/1.png';
import service2 from '../../assets/icon/dark/2.png';
import service3 from '../../assets/icon/dark/3.png';
import service4 from '../../assets/icon/dark/4.png';
import service5 from '../../assets/icon/dark/5.png';
import service6 from '../../assets/icon/dark/6.png';

//CTA
import cta1 from '../../assets/icon/light/1.png';
import cta2 from '../../assets/icon/light/2.png';
import cta3 from '../../assets/icon/color/3.png';

//Proyectos
import project1 from '../../assets/projects/1.jpg';
import project2 from '../../assets/projects/2.jpg';
import project3 from '../../assets/projects/3.jpg';
import project4 from '../../assets/projects/4.jpg';

//Clientes
import a from '../../assets/clients/1.png';
import b from '../../assets/clients/2.png';
import c from '../../assets/clients/3.png';
import d from '../../assets/clients/4.png';
import e from '../../assets/clients/5.png';


const Home = () => (

<>
<Helmet>
	<title>CheCat | Developers</title>
	<meta name="description" content="Home | Sitio web de desarrollo web y apps" data-react-helmet="true" />
</Helmet>
    <section className="hero-section">
       
        <div className="left-bar">
            <div className="left-bar-content">
                <div className="social-links">
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
            </div>
        </div>
       
        <div className="hero-slider">
            <div className="hero-slide-item set-bg" data-setbg={bg} >
                <div className="slide-inner">
                    <div className="slide-content">
                    <h2>Minimalistic  <br/>Architecture <br /> and more</h2>
                    <a href="#" className="site-btn sb-light">See Project</a>
                    </div>  
                </div>
            </div>  
            <div className="hero-slide-item set-bg" data-setbg={bg} >
                <div className="slide-inner">
                    <div className="slide-content">
                    <h2>Minimalistic <br/>Architecture <br /> and more</h2>
                    <a href="#" className="site-btn sb-light">See Project</a>
                    </div>  
                </div>
            </div>  
        </div>
        <div className="slide-num-holder" id="snh-1"></div>
        <div className="hero-right-text">architecture</div>
    </section>
    


    
    <section className="intro-section pt100 pb50">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 intro-text mb-5 mb-lg-0">
                    <h2 className="sp-title">We are a creative Architecture<span>Studio</span></h2>
                    <p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. Morbi rhoncus feugiat imperdiet. Curabitur non maximus leo. Nulla in ipsum sed magna egestas bibendum. Integer in sem sagittis, commodo mi sit amet, commodo nibh. Suspendisse potenti. Aliquam erat volutpat. </p>
                    <a href="#" className="site-btn sb-dark">See Project</a>
                </div>
                <div className="col-lg-5 pt-4">
                    <img src={intro} alt="" />
                </div>
            </div>
        </div>
    </section>


    <section className="service-section spad">
		<div className="container">
			<div className="section-title">
				<h2>Services</h2>
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


    <section className="cta-section pt100 pb50">
		<div className="cta-image-box"></div>
		<div className="container">
			<div className="row">
				<div className="col-lg-7 pl-lg-0 offset-lg-5 cta-content">
					<h2 className="sp-title">Dare to dream of a modern <span>home</span></h2>
					<p>Pellentesque lorem dolor, malesuada eget tortor vitae, tristique lacinia lectus. Pellentesque sed accumsan risus, id aliquam nulla. Integer lorem risus, feugiat at mauris malesuada, accumsan pellentesque ipsum. Nunc dapibus, libero ut pulvinar accumsan, tortor nisl iaculis ligula. Curabitur finibus dolor vel lectus pretium interdum a eget ante. </p>
					<div className="cta-icons">
						<div className="cta-img-icon">
							<img src={cta1} alt="" />
						</div>
						<div className="cta-img-icon">
							<img src={cta2} alt="" />
						</div>
						<div className="cta-img-icon">
							<img src={cta3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    <section className="milestones-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="milestone">
						<h2>14</h2>
						<p>Years <br />of <br />Experience</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="milestone">
						<h2>237</h2>
						<p>Projects <br />Taken</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="milestone">
						<h2>11k</h2>
						<p>Twitter <br />Followers</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="milestone">
						<h2>12</h2>
						<p>Awards <br />Won</p>
					</div>
				</div>
			</div>
		</div>
	</section>


    <div className="projects-section pb50">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<div className="section-title">
						<h1>Projects</h1>
					</div>
				</div>
				<div className="col-lg-9">
					<ul className="projects-filter-nav">
						<li className="btn-filter" data-filter="*">All</li>
						<li className="btn-filter" data-filter=".rest">Restaurations</li>
						<li className="btn-filter" data-filter=".build">Buildings</li>
						<li className="btn-filter" data-filter=".apart">Apartments</li>
					</ul>
				</div>
			</div>
		</div>                      
		<div id="projects-carousel" className="projects-slider">
			<div className="single-project set-bg rest" data-setbg={project1} >
				<div className="project-content">
					<h2>Biggest <br/> Restaurations</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg build" data-setbg={project2} >
				<div className="project-content">
					<h2>Office <br/> Building</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg apart" data-setbg={project3} >
				<div className="project-content">
					<h2>Nice <br/> Apartments</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg rest" data-setbg={project4} >
				<div className="project-content">
					<h2>Biggest <br/> Restaurations</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
			<div className="single-project set-bg apart" data-setbg={project2} >
				<div className="project-content">
					<h2>Office <br/> Building</h2>
					<p>Jan 19, 2018</p>
					<a href="#" className="seemore">See Project </a>
				</div>
			</div>
		</div>
	</div>


    <div className="client-section spad">
		<div className="container">
			<div id="client-carousel" className="client-slider">
				<div className="single-brand">
					<a href="#">
						<img src={a} alt="" />
					</a>
				</div>
				<div className="single-brand">
					<a href="#">
						<img src={b} alt="" />
					</a>
				</div>
				<div className="single-brand">
					<a href="#">
						<img src={c} alt="" />
					</a>
				</div>
				<div className="single-brand">
					<a href="#">
						<img src={d} alt="" />
					</a>
				</div>
				<div className="single-brand">
					<a href="#">
						<img src={e} alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>

   </>
)

export default Home;