import React, {useState, useEffect} from 'react'
import NavBarButton from './NavBarButton/NavBarButton'
import {useLocation} from 'react-router-dom'
//import ImportContactsIcon from '@material-ui/icons/ImportContacts';
function NavigationBar() {
    
    const location = useLocation();

    const [selected, setSelected] = useState(location.pathname.substring(1))
    const [margin, setMargin] = useState(`${10 * 1}rem`)
    useEffect(() => {
        if(selected === "about"){
            setMargin(`${10 * 3}rem`)
        }
        else if(selected === "projects"){
            setMargin(`${10 * 5}rem`)
        }
        else if(selected === "contact"){
            setMargin(`${10 * 7}rem`)
        }
    }, [selected])

    return (
        <div className="navigationBar">
            <div className="navigationBar-container">
                <div className="navigationBar-selector" style={{marginLeft:margin}} />
                <NavBarButton module={"Home"}   selected={selected} setSelected = {setSelected}     />
                <NavBarButton module={"about"}    selected={selected} setSelected = {setSelected}   />
                <NavBarButton module={"projects"} selected={selected} setSelected = {setSelected}   />
                <NavBarButton module={"contact"}   selected={selected} setSelected = {setSelected}  />
            </div>
        </div>
    )
}

export default NavigationBar
