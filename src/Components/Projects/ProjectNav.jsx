import React, {useState, useEffect, useRef} from 'react'
import Project from './Project'
import { Link } from "react-scroll";
import NetflixLogo from './NetflixLogo.png'
import NetflixScreeshot_1 from './NetflixScreenshot_1.png'
//import DuseScreeshot_1 from './DuseScreenshot_1.png'
//import PortfolioScreeshot_1 from './PortfolioScreenshot_1.png'
import FacebookLogo from './FacebookLogo.png'
import FacebookScreenshot_1 from './FacebookScreenshot_1.png'
import DuseLogo from './DuseLogo.png';
// eslint-disable-next-line 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
function ProjectNav() {
    const netflix = {
        backgroundColor1:"black",
        backgroundColor2: "rgba(0, 0, 0, 0.85",
        primaryColor : "red",
        headingColor : "red",
        textColor: "white",
        buttonColor:"red",
        logo : NetflixLogo,
        screenshot: NetflixScreeshot_1
    }

    const facebook = {
        backgroundColor1:"#3f92f0",
        backgroundColor2:"#075cca",
        primaryColor : "#1877f2",
        headingColor : "#3f92f4",
        textColor: "black",
        buttonColor:"#1877f2",
        logo:FacebookLogo,
        screenshot: FacebookScreenshot_1
    }


    const ref = useRef();
    const onScreen = useOnScreen(ref, 0.2);

    function useOnScreen(ref, threshold) {
        // State and setter for storing whether element is visible
        const [isIntersecting, setIntersecting] = useState(false);
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              // Update our state when observer callback fires
              setIntersecting(entry.isIntersecting);
            },
            {
              threshold,
            }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
              if(ref.current)
              {
                  // eslint-disable-next-line 
                  observer.unobserve(ref.current);
              }
          }
        }, [threshold, ref]);
        return isIntersecting;
      }

    const totalProjects = 1;
    const [number, setNumber] = useState(0)

    const [settings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true
    })
    

    const [isDesktop, setIsDesktop] = useState(useMediaQuery({minWidth:1000}, undefined, () => setIsDesktop(!isDesktop)))

    
    return (
        <div className="projectMain">
            <div className="projectMain__header">
                <div className="projectMain__header-heading">
                    Project
                </div>
                <div className="projectMain__header-divider">

                </div>
                <div className="projectMain__header-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet suscipit non at reiciendis, repellendus iure.
                </div>
                <div className="projectMain__header-grid">
                    <div className="projectMain__header-grid-title">
                        My Work
                    </div>
                    <div className=" container mt-5 carousel">
                        <Slider {...settings}>
                                    <div className="card-wrapper">
                                        <Link
                                            className="card"
                                            onClick={() => setNumber(0)}
                                            to="netflix"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >
                                                <img className="card-image" src={netflix.logo} alt="" />
                                        </Link>
                                    </div>
                                    
                                    <div className="card-wrapper">
                                        <Link
                                            className="card"
                                            onClick={() => setNumber(0)}
                                            to="facebook"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >
                                                <img className="card-image" src={facebook.logo} alt="" />
                                        </Link>
                                    </div>

                                    <div className="card-wrapper">
                                        <Link
                                            className="card"
                                            onClick={() => setNumber(0)}
                                            to="netflix2"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >
                                                <img className="card-image" src={DuseLogo} alt="" />
                                        </Link>

                                        
                                    </div>
                        </Slider>
                    </div>
                    {/* <div className="projectMain__header-grid__layout">
                        <Link
                            className="projectMain__header-grid__layout__card projectMain__header-grid__layout__card-netflix"
                            onClick={() => setNumber(0)}
                            to="netflix"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                                <img className="projectMain__header-grid__layout__card-img" src={netflix.logo} alt="" />
                        </Link>
                        <Link
                            className="projectMain__header-grid__layout__card projectMain__header-grid__layout__card-facebook"
                            onClick={() => setNumber(0)}
                            to="facebook"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                                <img className="projectMain__header-grid__layout__card-img" src={facebook.logo} alt="" />
                        </Link>
                        <Link
                            className="projectMain__header-grid__layout__card projectMain__header-grid__layout__card-duse"
                            onClick={() => setNumber(0)}
                            to="netflix2"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                                <img className="projectMain__header-grid__layout__card-img" src={DuseLogo} alt="" />
                        </Link>
                    </div>          */}
                </div>

            </div>
            
            <div className="project__outerContainer">
            {
                onScreen ?
            <div className="projectNavigation">
            
            <Link
                className="projectNavigation__box"
                onClick={() => setNumber(0)}
                activeClass="active"
                to="netflix"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            />
            <Link
                    className="projectNavigation__box"
                    onClick={() => setNumber(1)}
                    activeClass="active"
                    to="facebook"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
            />
            <Link
                    className="projectNavigation__box"
                    onClick={() => setNumber(1)}
                    activeClass="active"
                    to="facebook2"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
            />
            <Link
                    className="projectNavigation__box"
                    onClick={() => setNumber(1)}
                    activeClass="active"
                    to="netflix2"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
            />
        </div >:null
        }
        <div ref={ref}>
            <Project id={"netflix"} data = {netflix} number={number} isDesktop={isDesktop} setNumber={setNumber} maxNumber={totalProjects}/>
            <Project id={"facebook"} data = {facebook} number={number} isDesktop={isDesktop} setNumber={setNumber} maxNumber={totalProjects}/>
            <Project id={"facebook2"} data = {facebook} number={number} isDesktop={isDesktop} setNumber={setNumber} maxNumber={totalProjects}/>
            <Project id={"netflix2"} data = {netflix} number={number} isDesktop={isDesktop} setNumber={setNumber} maxNumber={totalProjects}/>
        </div>
    
            </div>
        </div>
    )
}

export default ProjectNav
