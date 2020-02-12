import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CovrLettr from '../containers/CovrLettr';
import AboutUs from '../containers/AboutUs';
import { SessionProvider } from './hooks/auth';

export default function App() {
  return (
    <Router>
      <Header />
      <SessionProvider>
        <Switch>
          <Route exact path="/" component={CovrLettr} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
      </SessionProvider>
      <Footer />
    </Router>
  );
}

