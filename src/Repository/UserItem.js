import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => { // Destructured Prop that is being sent from UserItem
    return (
        <div className={"card text-center"}>
            <img
                src={avatar_url}
                alt={"This is a github account"}
                className={"round-img"}
                style={{width: '60px'}}
            />
            <div>
                <a href={html_url} className={"btn btn-dark btn-sm my-1"}> More..</a>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;

