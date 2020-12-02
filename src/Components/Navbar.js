import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <Fragment>
                    <i className={icon}/>
                </Fragment>
                {title}
            </h1>

            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>

            </ul>
        </nav>
    );

}

Navbar.defaultProps = { // Used for internal Prop. Also, when the caller of Navbar does not provide
    //any props, the default is used.
    title: " Git-Hub User Finder!",
    icon: "fas fa-feather-alt",
    color: "blue"
}

Navbar.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
}
export default Navbar;
