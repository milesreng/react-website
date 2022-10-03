import React, { Component } from 'react';
import imgPride from '../../assets/me-hat.JPG';
import imgLA from '../../assets/me-la.JPG';
import imgHike from '../../assets/me-hike.JPG';
import collage from '../../assets/collage.png';

class About extends Component {
    render() {
        return (
            <div className="about container-fluid mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 pt-5">
                        <img src={collage} alt="Miles wearing a hat" />
                    </div>
                    <div className="col-12 col-md-6 about-info pt-5">
                        <h1>About Me</h1>
                        <div className="about-info-p">
                            <p>Hi! I'm Miles Eng and I'm a sophomore at Duke University, 
                                working towards a B.S. in Computer Science and Global Health.</p>
                            <p>Currently, I'm passionate about delving deeper into web and software 
                                development while exploring my interests in global health. In the 
                                future, I'd love to work in the intersection between technology 
                                and health policy.</p>
                            <p>I grew up in Bellevue, WA and currently live in Durham, NC. In my free time, I love to hike, 
                                play with my dogs, and watch soccer.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;