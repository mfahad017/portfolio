import React from 'react'

function ProjectPhone({data, id}) {
    return (
        <section className="projectMobileView" >

            <div className="projectMobileView__logo">
                <img src={data.logo} alt="" className="projectMobileView__logo__image" />
            </div>

            <div className="projectMobileView__info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, autem provident quam quidem temporibus perferendis atque voluptate? Consequuntur, laborum repellendus.
            </div>
            
            <div className="projectMobileView__screenshot">
                <h1 className="projectMobileView__screenshot__heading">Screenshots</h1>
                <img src={data.screenshot} alt="logoscreenshot" className="projectMobileView__screenshot__image" />
            </div>


            <div className="projectMobileView__redirect">
                <button className="projectMobileView__redirect__button"><a href="https://clone-e9f09.web.app/" rel="noreferrer" target="_blank" >Go to site</a></button>
            </div>

        </section>
    )
}

export default ProjectPhone
