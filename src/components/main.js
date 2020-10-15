import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './aboutme';
import Contacts from './contacts';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/aboutme" component = {About} />
        <Route path = "/contacts" component = {Contacts} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/resume" component = {Resume} />
    </Switch>
)

export default Main;