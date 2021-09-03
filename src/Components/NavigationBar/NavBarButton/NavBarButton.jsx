import React, {useState} from 'react'
import { Link } from 'react-router-dom';
//import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';

function NavBarButton({module, selected, setSelected}) {

    const [m] = useState(module)

    const handleNavClick = () =>{
        setSelected(module)
        //history.push(`/${module.toLowerCase()}`)
    }

    return (
        <Link to={`/${module.toLowerCase()}`} onClick={handleNavClick} className={selected === m ? "navBarButton" : "navBarButton"}>
                <div className="navBarButton-selector" />
                <div  className="navBarButton-text">
                        {module}
                </div>
        </Link>
    )
}

export default NavBarButton
