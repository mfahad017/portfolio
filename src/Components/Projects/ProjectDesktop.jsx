import React, {useState} from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LaptopIcon from './laptopScreen.png'
function ProjectDesktop({data, id}) {
    const [viewMore, setViewMore] = useState(false)
    const [preview, setPreview] = useState(false)
    return (
        <div className="project__item__laptop"  >
                                        <img className="project__item__laptop-image" alt="laptopImage" src={LaptopIcon} />
                                            {
                                                !preview ?
                                        <div className="project__item__laptop-screen"  >
                                            <img className="project__item__laptop-screen-content" alt="imageContent" src={data.screenshot}/>
                                            <div className={viewMore ? "project__item__laptop-screen__overlay" : "project__item__laptop-screen__overlay project__item__laptop-screen__overlay-giveheight"}>
                                                <div className="project__item__laptop-screen__overlay-small">
                                                    <button style={{backgroundImage: `linear-gradient(to right bottom, ${data.headingColor},${data.primaryColor})`}} onClick={() => setViewMore(true)}>View More</button>
                                                </div>
                                                <div className={viewMore ? "project__item__laptop-screen__overlay-large-giveheight project__item__laptop-screen__overlay-large" :"project__item__laptop-screen__overlay-large"}>
                                                    <div  onClick={() => setViewMore(false)} className="project__item__laptop-screen__overlay-large-closeButton" style={{color:data.primaryColor}}>
                                                        <HighlightOffIcon  className="project__item__laptop-screen__overlay-large-closeButton-icon" />
                                                    </div>
                                                        <div className="project__item__laptop-screen__overlay-large-logo">
                                                                <img className="project__item__laptop-screen__overlay-large-logo-image" src={data.logo} alt="Netflix logo" />
                                                        </div>
                                                        <div style={{color:data.headingColor}} className="project__item__laptop-screen__overlay-large-header">
                                                                This is a clone Project
                                                        </div>
                                                        <div className="project__item__laptop-screen__overlay-large-text">
                                                            <p style={{color:data.textColor}}>
                                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis perspiciatis 
                                                                esse veritatis nostrum tempore praesentium dolor fugit corrupti totam commodi!
                                                            </p>
                                                        </div>
                                                        <div  className="project__item__laptop-screen__overlay-large-button">
                                                            <button style={{backgroundImage: `linear-gradient(to right bottom, ${data.headingColor}, ${data.primaryColor})`}} onClick={() => setPreview(true)}>Preview</button>
                                                            <a href="https://netflix-clone-ff.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                            :
                                                <div className="project__item__laptop-screen"  >
                                                        <div  onClick={() => setPreview(false)} className="project__item__laptop-screen-previewClose">
                                                            <HighlightOffIcon  className="project__item__laptop-screen-previewClose-icon" />
                                                        </div>
                                                        <iframe title="ClonePreview" className="project__item__laptop-screen-preview" src="https://netflix-clone-ff.netlify.app/" />
                                                </div>
                                            }
                                    </div>
    )
}

export default ProjectDesktop
