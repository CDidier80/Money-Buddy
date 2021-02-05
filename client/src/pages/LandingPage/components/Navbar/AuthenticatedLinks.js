import { NavLink, Link } from "react-router-dom"
import React from "react"

const AuthenticatedLinks = (props) => {

    const { setAuth, setUserInfo } = props.fromApp

    const logOut = (e) => {
        setAuth(false)
        setUserInfo(null)
        localStorage.clear()
    }

    return (
        <>
            <NavLink 
                to={"/dashboard/"}  
                className="mobile navlink" 
            > 
                Dashboard 
            </NavLink> 
            <Link 
                className="mobile navlink" 
                onClick={()=>logOut()}
                to={"#"}
            >
                Sign Out
            </Link>
        </>
    )
}

export default AuthenticatedLinks