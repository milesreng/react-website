import React, { Component } from 'react';
import rLogo from '../../assets/r-logo.svg';

class Skills extends Component {
    render() {
        return (
            <div className="skills container-fluid">
                <div className="row logo-row justify-content-between align-items-start">
                    <div className="col-6 col-lg skill-logo skill-animate _15">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/java-coffee-cup-logo--v1.png" alt="java logo" />
                        </div>
                        <h3>Java</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _16">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt="html logo" />
                        </div>
                        <h3>HTML</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _17">
                        <div className="img-container">
                            <img src="https://img.icons8.com/fluency/240/000000/css3.png" alt="css logo" />
                        </div>
                        <h3>CSS</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _18">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" alt="javascript logo" />
                        </div>
                        <h3>JavaScript</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _19">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/react-native.png" alt="reactjs logo" />
                        </div>
                        <h3>Reactjs</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _20">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/bootstrap.png" alt="bootstrap logo" />
                        </div>
                        <h3>Bootstrap</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _21">
                        <div className="img-container">
                            <img src="https://img.icons8.com/color/480/000000/python--v1.png" alt="python logo" />
                        </div>
                        <h3>Python</h3>
                    </div>
                    <div className="col-6 col-lg skill-logo skill-animate _22">
                        <div className="img-container">
                            <img src={rLogo} alt="r logo" />
                        </div>
                        <h3>R</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;