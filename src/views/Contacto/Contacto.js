import React from 'react';
import { Helmet } from 'react-helmet';
import './Contacto.css';

import location from '../../assets/location.png';
import mail from '../../assets/mail.png';
import call from '../../assets/call.png';

//Redes
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import link from '../../assets/link.png';

const Contacto = () => (
  
    <>
	<Helmet>
		<title>Contacto | CheCat | Developers</title>
		<meta name="description" content="Contacto | Sitio web de desarrollo web y apps" data-react-helmet="true" />
	</Helmet>

    <div className="contactoContainer" >
      <div className="containerCon">
        <div className="contactinfo">
          <div>
            <h2>Contacto</h2>
            <ul className="info">
              <li>
                <span><img src={location} alt="" /></span>
                <span>Av. Lisandro de la Torre 2061 <br/>
                    Comodoro Rivadavia, Chubut <br/>
                  C.P. 9000</span>
              </li>
              <li>
                <span><img src={mail} alt="" /></span>
                <span>checat@gmail.com</span>
              </li>
              <li>
                <span><img src={call} alt="" /></span>
                <span>297-514-4422 <br />
                11-344-71537</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href=""><img src={facebook} alt="" /></a></li>
            <li><a href=""><img src={instagram} alt="" /></a></li>
            <li><a href=""><img src={link} alt="" /></a></li>
            {/* <li><a href=""><img src="4.png" /></a></li>
            <li><a href=""><img src="5.png" /></a></li> */}
          </ul>


        </div>
        <div className="contactForm">
          <h2>Envianos tu mensaje</h2>
          <div className="formBox">

            <div className="inputBox w50">
              <input type="text" required />
              <span>Nombre</span>
            </div>

            <div className="inputBox w50">
              <input type="text" required />
              <span>Apellido</span>
            </div>

            <div className="inputBox w50">
              <input type="email" required />
              <span>Email</span>
            </div>

            <div className="inputBox w50">
              <input type="text" required />
              <span>Telefono de contacto</span>
            </div>

            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Escriba su mensaje aqui...</span>
            </div>

            <div className="inputBox w100">
              <input type="submit" value="Enviar" />
            </div>

          </div>
        </div>
      </div>
    </div>

    

    </>
)

export default Contacto;