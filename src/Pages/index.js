import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Community from "./Community";
import Services from "./Services";
import Gallery from "./Gallery";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";


let Pages = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/community">
                <Community />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="/resume">
                <Resume />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Redirect to="/" />
        </Switch>

    )
}

export default Pages;
export { Home };