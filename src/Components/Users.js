import React from "react"
import UserItem from "../Repository/UserItem";
import propTypes from "prop-types";
import Spinner from "./Spinner";

const Users = ({loading, users}) => {
    if (!loading) {
        return (
            <div style={userStyle}>
                {
                    users.map(eachUser => {
                            return <UserItem key={eachUser.id} user={eachUser}/>
                        }
                    )
                }
            </div>
        );
    } else {
        return (
            <Spinner></Spinner>
        );
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}

Users.propTypes = {
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
}
export default Users;
