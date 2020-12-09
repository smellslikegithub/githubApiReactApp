import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "../Components/Pages/About";

const UserItem = ({user: {login, avatar_url, html_url}}) => { // Destructured Prop that is being sent from Users
    return (
        <div className={"card text-center"}>
            <img
                src={avatar_url}
                alt={"This is a github account"}
                className={"round-img"}
                style={{width: '60px'}}
            />
            <div>
                <Link to={`/user/${login}`} className={"btn btn-dark btn-sm my-1"}> More..</Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;

