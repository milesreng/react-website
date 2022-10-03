import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgPercolate from '../../assets/percolation.png';
import imgHomepage from '../../assets/homepage.png';
import imgHuffman from '../../assets/huffman.png';
import '../App.scss';

class Projects extends Component {
    render() {
        return (
            <div className="projects container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-3 projects-header">
                        <h1>Projects</h1>
                    </div>
                    <div className="projects-container col-12 col-lg-9">
                        <div className="row project-1 project">
                            <div className="card project-card">
                                <div className="row g-0">
                                    <div className="col-12 col-lg-3 project-img-container">
                                        <img src={imgPercolate} className="project-img rounded-start" alt="" />
                                    </div>
                                    <div className="col card-text-container row row-cols-1">
                                        <h3 className="card-title pt-2">Percolation</h3>
                                        <p className="card-text">For CS201 (Data Structures & Algorithms), wrote a 
                                        program designed to estimate the value of the Percolation Threshold via Monte 
                                        Carlo simulation using a variety of solutions such as depth-first search, 
                                        breadth-first search, and union-find structures.</p>
                                        <a href="https://github.com/milesreng/cs201-projects" target="_blank" className="btn-project mb-3">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row project-2 project">
                            <div className="card project-card">
                                <div className="row g-0">
                                    <div className="col-12 col-lg-3 project-img-container">
                                        <img src={imgHuffman} className="project-img rounded-start" alt="" />
                                    </div>
                                    <div className="col card-text-container row row-cols-1">
                                        <h3 className="card-title pt-2">Huffman Encoding/Decoding</h3>
                                        <p className="card-text">For CS201, implemented algorithms for compression and decompression of text files using 
                                        Huffman tree coding.</p>
                                        <a href="https://github.com/milesreng/cs201-projects" target="_blank" className="btn-project mb-3">view project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row project-3 project">
                            <div className="card project-card">
                                <div className="row g-0">
                                    <div className="col-12 col-lg-3 project-img-container">
                                        <img src={imgHomepage} className="project-img rounded-start" alt="" />
                                    </div>
                                    <div className="col card-text-container row row-cols-1">
                                        <h3 className="card-title pt-2">This website!</h3>
                                        <p className="card-text">As I learned React.js, I became curious about the 
                                        capabilities of the framework to make my portfolio website. I implemented this
                                        site using React.js, animate.css and Bootstrap.</p>
                                        <Link href="/" target="" className="btn-project mb-3">view project</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;