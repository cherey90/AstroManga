import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme.js';


//Páginas del sitio web
import Home from './views/Home';
import Acerca from './views/Acerca';
import Servicios from './views/Servicios';
import Contacto from './views/Contacto';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  
  return (
    
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div id="App">
              <Header pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Acerca' component={Acerca} />
                    <Route path='/Servicios' component={Servicios} />
                    <Route path='/Contacto' component={Contacto} />
                  </Switch>
                
                  <Footer />
                </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
    
  );
}

export default App;