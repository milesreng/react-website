import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skills container">
                <div className="row">
                    <img className="skill-logo col-4" src="https://img.icons8.com/color/480/000000/java-coffee-cup-logo--v1.png" alt="" />
                    <img className="skill-logo col-4" src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt="" />
                    <img className="skill-logo col-4" src="https://img.icons8.com/fluency/240/000000/css3.png" alt="" />
                </div>
                <div className="row">    
                    <img className="skill-logo col-4" src="https://img.icons8.com/color/480/000000/javascript--v1.png" alt="" />
                    <img className="skill-logo col-4" src="https://img.icons8.com/color/480/000000/react-native.png" alt="" />
                    <img className="skill-logo col-4" src="https://img.icons8.com/color/480/000000/bootstrap.png" alt="" />
                    <img className="skill-logo" src="https://img.icons8.com/color/480/000000/python--v1.png" alt="" />
                    <img className="skill-logo" src="https://img.icons8.com/color/480/000000/c-programming.png" alt="" />

                </div>
            </div>
        );
    }
}

export default Skills;