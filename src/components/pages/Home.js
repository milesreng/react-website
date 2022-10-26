import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/Animated';
import ClipArt from '../../assets/computer-removebg.png';
import NavBarTest from '../Navbar/NavBarTest';
import NavBar from '../Navbar/NavBar';

import '../App.scss';

const Home = () => {
    const [letterClass, setLetter] = useState('text-animate');
    const nameArray = [' ', 'M', 'i', 'l', 'e', 's', ','];
    const jobArray = "a computer science student.".split("");

    return (
        <div>
            <NavBar />
            <div className="custom-container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span><br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span> 
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                            <br />
                        <span className="home-desc">
                            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                        </span>
                    </h1>
                    <h2>Sophomore @ Duke University</h2>
                    <Link className="btn" to="/contact">CONTACT ME</Link>
                </div>
                <img className="home-img" src={ClipArt} alt="man typing at computer" />
            </div>
        </div>
    );
}

export default Home;