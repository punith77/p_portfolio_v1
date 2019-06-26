import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.scss'


export default class Navbar extends React.Component {


    render() {


        return (
            <div className="nav-container">

                <div className="nav-inner">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
            </div>
        )
    }
}