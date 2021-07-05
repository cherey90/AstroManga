import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';


//Páginas del sitio web
import Home from './views/Home';
import Acerca from './views/Acerca';
import Servicios from './views/Servicios';
import Contacto from './views/Contacto';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Acerca' component={Acerca} />
              <Route path='/Servicios' component={Servicios} />
              <Route path='/Contacto' component={Contacto} />

            </Switch>
          <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;