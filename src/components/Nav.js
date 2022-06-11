import React from "react";
import { Link } from "react-router-dom"
import { FaHandHoldingHeart } from "react-icons/fa"
import { GrMoney } from "react-icons/gr"


const Nav = () => {

    function toggleNav() {
        dispatch({ type: Nav })
    }

    return (
        <>
            <nav className="w3-sidebar w3-collapse w3-white" id="mySidebar">
                <div className="close" onClick={toggleNav}>[close]</div>
                <div className="w3-bar-block">
                    <Link to="/">
                        <li><i className="fa fa-th-large fa-fw w3-margin-right"></i>HOME</li>
                    </Link>
                    <Link to="/about">
                        <li><i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT</li>
                    </Link>
                    <Link to="/products">
                        <li><FaHandHoldingHeart />PRODUCTS</li>
                    </Link>
                    <Link to="/contact">
                        <li><i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT</li>
                    </Link>


                </div>
                <div className="bottom-links">
                    <button className="w3-button w3-white"><GrMoney />Donate</button>
                    <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>People</button>
                    <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Map</button>
                    <div className="w3-panel w3-large">
                        <i className="icon fa fa-facebook-official"></i>
                        <i className="icon fa fa-instagram"></i>
                        <i className="icon fa fa-twitter"></i>
                        <i className="icon fa fa-linkedin"></i>
                    </div>

                </div>

            </nav>

            <header id="menu">

                <div className="w3-container">
                    <h1><b>HEALING HANDS</b></h1>
                    <div className="w3-section w3-bottombar w3-padding-16">

                    </div>
                </div>
            </header>
        </>

    )
}

export default Nav;