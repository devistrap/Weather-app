import React from 'react';
import './nav.css';

function Nav() {
    return (
        <div>
        <nav>
            <h1>Weather App <img id='cross' src='./src/nav/img/cross.svg' onClick={
                () => {
                    document
                }
            } /></h1>
            <ul>
            
                <li><img src='./src/nav/img/home.svg' id='home-img' /><a id='home-text' href="#">Home</a></li>
                <li><img src='./src/nav/img/about.svg' id='home-img' /><a id="about-text" href="#">About</a></li>
                <li><img src='./src/nav/img/contact.svg' id='home-img' /><a id='contact-text' href="#">Contact</a></li>
            </ul>
        </nav>
        <div className='mini-nav'>
            <img src='./src/nav/img/menu.svg' id='home-img' />
            
        </div>
        </div>
    );
}

export default Nav;
