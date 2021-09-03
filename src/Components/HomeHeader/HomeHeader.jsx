import React from 'react'
import Buttonarrow from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";
import hero from './hero.png'
function HomeHeader() {
    return (
        <div className="homeHeader" style={{backgroundImage:`url(${hero})`}}>
            <div className="dynamicHeading u-margin-bottom-small">
                <div className="dynamicHeading-static"><p><span>Hello, </span>I'm</p></div>
                <ul className="dynamicHeading-dynamic">
                    <li><span>Fahad Nadeem</span></li>
                    <li><span>an aspiring web developer</span></li>
                </ul>
            </div>
            <h1>
                go to fb
                <a href="www.facebook.com">facebook</a>
            </h1>
            <Link to="/about" className="homeHeader_button">
                <span className="homeHeader_button-text">Who am I?</span>
                <span ><Buttonarrow className="homeHeader_button-arrow"/></span>
            </Link>
        </div>
    )
}

export default HomeHeader
