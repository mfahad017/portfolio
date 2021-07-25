import React from 'react'

import ProjectPhone from './ProjectPhone';
import ProjectDesktop from './ProjectDesktop';


function Project({data,id, isDesktop}) {
    
    
    return (
            data 
            ?    
                    <section id={id} style={{backgroundImage:`linear-gradient(to bottom right,${data.backgroundColor1},${data.backgroundColor2})`}} className="project">
                        
                        <div className="project__item">
                            {
                                isDesktop
                                ?
                                    <ProjectDesktop data={data} id={id} />
                                :
                                    <ProjectPhone data={data} id={id} />

                            }
                        </div>
                    </section>
            :
                null
    )
}
export default Project
