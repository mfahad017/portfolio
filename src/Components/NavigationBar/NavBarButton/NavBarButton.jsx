import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
//import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';

function NavBarButton({module, selected, setSelected}) {

    const [m] = useState(module)

    const history = useHistory();
    const handleNavClick = () =>{
        setSelected(module)
        history.push(`/${module.toLowerCase()}`)
    }

    return (
        <div onClick={handleNavClick} className={selected === m ? "navBarButton" : "navBarButton"}>
                <div className="navBarButton-selector" />
                <div  className="navBarButton-text">
                        {module}
                </div>
        </div>
    )
}

export default NavBarButton
