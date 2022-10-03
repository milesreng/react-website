import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/Animated';
import ClipArt from '../../assets/computer-removebg.png';

import '../App.scss';

const Home = () => {
    const [letterClass, setLetter] = useState('text-animate');
    const nameArray = [' ', 'M', 'i', 'l', 'e', 's'];
    const jobArray = "idk what to put here.".split("");

    return (
        <div className="custom-container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span><br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span> 
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                </h1>
                <h2>Frontend Developer / JavaScript</h2>
                <Link className="btn" to="/contact">CONTACT ME</Link>
            </div>
            <img className="home-img" src={ClipArt} alt="man typing at computer" />
        </div>
    );
}

export default Home;