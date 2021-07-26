import React from 'react'
import BarChar from './BarChart/BarChar';
import profile from './profile.png'
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import DoneIcon from '@material-ui/icons/Done';
function About() {
    const data = {
        "HTML":70,
        "SCSS": 70,
        "JavaScript": 60,
        "ReactJs": 70,
        "Redux": 50,
        "NodeJs": 50,
        "ThreeJs": 10,
        "MongoDB": 50,
    };
    const aboutMe = "I'm a Fresh Graduadte from HITEC University, Taxila. I have serious passion for Web Development and creating intuitive, dynamic Websites. Let's make something special."
    return (
        <div className="about">
            <div className="about__header">
                About
            </div>
            <div className="about__divider">&nbsp;</div>
            
            <div className="about__feature">
                    <div className="about__feature__item" >
                        <div className="about__feature__item-icon" style={{animation: "featureAnimate 500ms linear both"}}>
                            <SpeedOutlinedIcon className="about__feature__item-icon-actual" />
                        </div>
                        <div className="about__feature__item-heading">
                            <h3>fast</h3>
                        </div>
                        <div className="about__feature__item-text">
                            <p>
                                Fast load times and lag free interaction, my highest priority.
                            </p>
                        </div>
                    </div>
                    <div className="about__feature__item">
                        <div className="about__feature__item-icon" style={{animation: "featureAnimate 500ms 250ms linear both"}}>
                            <ImportantDevicesIcon className="about__feature__item-icon-actual" />
                        </div>
                        <div className="about__feature__item-heading">
                        <h3>Responsive</h3>
                        </div>
                        <div className="about__feature__item-text">
                            <p>
                                My layouts will work on any device, big or small.
                            </p>
                        </div>
                    </div><div className="about__feature__item">
                        <div className="about__feature__item-icon" style={{animation: "featureAnimate 500ms 500ms linear both"}}>
                            <InsertEmoticonIcon className="about__feature__item-icon-actual" />
                        </div>
                        <div className="about__feature__item-heading">
                        <h3>Intuitive</h3>
                        </div>
                        <div className="about__feature__item-text">
                            <p>
                                Strong preference for easy to use, intuitive UX/UI.
                            </p>
                        </div>
                    </div><div className="about__feature__item">
                        <div className="about__feature__item-icon" style={{animation: "featureAnimate 500ms 750ms linear both"}}>
                            <DoneIcon className="about__feature__item-icon-actual" />
                        </div>
                        <div className="about__feature__item-heading">
                        <h3>Dynamic</h3>
                        </div>
                        <div className="about__feature__item-text">
                            <p>
                                Websites don't have to be static, I love making pages come to life.                            </p>
                        </div>
                    </div>
            </div>
            
            <div className="about__info">
                <div className="about__info__personal">
                <div className="about__info__personal-img">
                    <img  src={profile} alt="my profile"  />

                </div>
                    <h2>Who am I ?</h2>
                    <p>
                        {aboutMe}
                    </p>
                </div>
                <div className="about__info__language">
                    <BarChar data={data}/>
                </div>
            </div>
        </div>
    )
}

export default About
