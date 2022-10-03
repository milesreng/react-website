import React, { Component } from 'react';

class Coursework extends Component {
    render() {
        return (
            <div className="coursework container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="col-3 coursework-label">
                        <p className="duke">
                            <img src="https://img.icons8.com/fluency-systems-regular/96/000000/education.png" alt="graduation cap" />
                            Duke University</p>
                        <p>B.S. Computer Science, B.A.2 Global Health</p>
                        <p>GPA: 4.0/4.0</p>
                    </div>
                </div>
                <div className="row justify-content-evenly">
                    <div className="card col-12 col-xl-3 card-animate card-1">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="cpu" />
                        <div className="card-header course-title">
                            <h2>CS250 - Computer Architecture</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text course-desc">Focuses on instruction sets, assembly language 
                            programming, basic digital logic design, processor design, memory system 
                            design, and input/output. Taught in C (in progress). </p>
                            <a href="" target="_blank" className="btn btn-coursework">view course page</a>
                        </div>
                    </div>
                    <div className="card col-12 col-xl-3 card-animate card-2">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="laptop with code" />
                        <div className="card-header course-title long-course-title">
                            <h2>CS201 - Data Structures & Algorithms</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text course-desc">Analysis and design of data structures and 
                            algorithms in Java. Emphasis on abstraction including data types for lists, trees, 
                            sets, tables/maps, and graphs.</p>
                            <a href="https://sites.duke.edu/compsci_201_001_sp22/" target="_blank" className="btn btn-coursework">view course page</a>
                        </div>
                    </div>
                    <div className="card col-12 col-xl-3 card-animate card-3">
                        <img src="https://images.unsplash.com/photo-1609017909889-d7b582c072f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" alt="red dice" />
                        <div className="card-header course-title">
                            <h2>STA199 - Intro to Data Science</h2>
                        </div>
                        <div className="card-body">
                            <p className="card-text course-desc">Intro to data science and statistical thinking 
                            in R. Learn to explore, visualize, and analyze data to understand natural phenomena, 
                            investigate patterns, model outcomes, and make predictions.</p>
                            <a href="" target="_blank" className="btn btn-coursework">view course page</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coursework;