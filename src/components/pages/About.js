import React, { Component } from 'react';
import imgPride from '../../assets/me-hat.JPG';
import imgLA from '../../assets/me-la.JPG';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About Me</h1>
                <div className="container">
                    <div className="row">
                        <img src={imgPride} />
                        <img src={imgLA} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;