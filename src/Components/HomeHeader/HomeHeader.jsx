import React from 'react'
import Buttonarrow from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";

function HomeHeader() {
    const history = useHistory();
    return (
        <div className="homeHeader">
            <div className="dynamicHeading u-margin-bottom-small">
                <div className="dynamicHeading-static"><p><span>Hello, </span>I'm</p></div>
                <ul className="dynamicHeading-dynamic">
                    <li><span>Fahad Nadeem</span></li>
                    <li><span>an aspiring web developer</span></li>
                </ul>
            </div>
            <button onClick={() => history.push("/about")} className="homeHeader_button">
                <span className="homeHeader_button-text">Who am I?</span>
                <span ><Buttonarrow className="homeHeader_button-arrow"/></span>
            </button>
        </div>
    )
}

export default HomeHeader
