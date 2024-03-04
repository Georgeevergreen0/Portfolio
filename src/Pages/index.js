import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Community from "./Community/Community";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";


const Pages = () => {
    const location = useLocation();

    useEffect(() => {
        // 👇️ scroll to top on page change
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [location.pathname])

    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/blog">
                <Blog />
            </Route>
            <Route exact path="/community">
                <Community />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/gallery">
                <Gallery />
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/skills">
                <Skills />
            </Route>
            <Route exact path="/resume">
                <Resume />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Redirect to="/" />
        </Switch>

    )
}

export default Pages;
