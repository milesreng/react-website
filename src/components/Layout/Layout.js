import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../Navbar/NavBar";
import navbar2 from '../Navbar/navbar2';

import '../App.scss';

class Layout extends Component {
    render() {
        return (
            <div classname="App">
                <navbar2 />
                <NavBar />
                <div className="page">
                    <span className="tags top-tags h2">public static void main(String args, int[] argv*) &#123;</span>
                    <br />
                    <span className="tags while-tag h2">while (isProgrammer) &#123;</span>
                    <Outlet />

                    <span className="tags while-tag-bottom h2">&#125;</span>
                    <span className="tags bottom-tags h2">&#125;</span>

                </div>
            </div>
        );
    }
}

export default Layout;