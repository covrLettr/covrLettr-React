import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CovrLettr from '../containers/CovrLettr';
import AboutUs from '../containers/AboutUs';
import { SessionProvider } from './hooks/auth';
import UserAuth from '../containers/UserAuth';

export default function App() {
  return (
    <Router>
      <SessionProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={CovrLettr} />
          <Route path="/about" component={AboutUs} />
          <Route path="/userauth" component={UserAuth} />
        </Switch>
      </SessionProvider>
      <Footer />
    </Router>
  );
}
