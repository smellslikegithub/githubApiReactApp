import React, {Component, Fragment} from "react";



class User extends Component{
    componentDidMount() {
       this.props.getUser(this.props.match.params.loginId);
       console.log("Inside didMount()" + this.props.match.params.loginId);
    }

    render() {
        const user = this.props.user;
        console.log(user);
        return(
            <Fragment>
                <pre>
                    {JSON.stringify(user)}
                </pre>
            </Fragment>
        );
    }
}

export default User;