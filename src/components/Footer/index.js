import React from 'react';
import { Link } from 'react-router-dom'

import './footer.scss'

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <div className="footer-brand">
                    Designed By: Punith
                    </div>

                <div className="footer-inner">



                    <div className="social-group">
                        <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/punith-c-819883153/"><ion-icon name="logo-linkedin" className="social-icon"></ion-icon></a>
                        <a className="social-link" target="_blank" rel="noopener noreferrer" href="https://github.com/punith77"><ion-icon name="logo-github"></ion-icon></a>
                        <Link to="/contact" className="page-link social-link"><ion-icon name="mail"></ion-icon></Link>
                    </div>

                </div>
            </div>
        )
    }
}