import AccountPageLink from "./components/AccountPageLink"
import LandingPageLink from "./components/LandingPageLink"
import SignOutLink from "./components/SignOutLink"
import Burger from "./components/Burger"
import React from 'react'

const NavBar = (props) => {

    return (
        <nav className="dash-navbar">
            <LandingPageLink />
            <Burger {...props} />
            <SignOutLink {...props} />
            <AccountPageLink {...props} />
        </nav>
    )
}

export default NavBar
