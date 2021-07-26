import React, {useState, useEffect} from 'react'
import NavBarButton from './NavBarButton/NavBarButton'
import {useLocation} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
//import ImportContactsIcon from '@material-ui/icons/ImportContacts';
function NavigationBar() {
    
    const location = useLocation();

    const [selected, setSelected] = useState(location.pathname.substring(1))
    const [marginValue, setMarginValue] = useState(10)
    const [margin, setMargin] = useState(`${marginValue * 1}rem`)


    const handleMarginChange = () =>{
        setMarginValue(8)
    }

    const [isPhone] = useState(useMediaQuery({maxWidth:600}, undefined, handleMarginChange))

    useEffect(()=>{
        if(isPhone){
            setMarginValue(8)
        }
        else{
            setMarginValue(10)
        }
        //eslint-disable-next-line
    },[])

    useEffect(() =>{

        setMargin(`${marginValue * 1}rem`)

    },[marginValue])


    useEffect(() => {
        setSelected(location.pathname.substring(1))
    }, [location])


    useEffect(() => {
        if(selected === "home"){
            setMargin(`${marginValue * 1}rem`)
        }
        else if(selected === "about"){
            setMargin(`${marginValue * 3}rem`)
        }
        else if(selected === "projects"){
            setMargin(`${marginValue * 5}rem`)
        }
        else if(selected === "contact"){
            setMargin(`${marginValue * 7}rem`)
        }
        console.log(selected)
    }, [selected, marginValue])

    return (
        <div className={`navigationBar ${selected === 'home' || selected === '' ? "navigationBar-hide" : "navigationBar-show"}`}>
            <div className="navigationBar-container">
                <div className="navigationBar-selector" style={{marginLeft:margin}} />
                <NavBarButton module={"home"}   selected={selected} setSelected = {setSelected}     />
                <NavBarButton module={"about"}    selected={selected} setSelected = {setSelected}   />
                <NavBarButton module={"projects"} selected={selected} setSelected = {setSelected}   />
                <NavBarButton module={"contact"}   selected={selected} setSelected = {setSelected}  />
            </div>
        </div>
    )
}

export default NavigationBar
