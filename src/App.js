import './App.css';
import React, {Component, Fragment} from 'react';
import './Components/Navbar'
import Navbar from "./Components/Navbar";
import Users from "./Components/Users"
import Alert from "./Components/Alert";
import Search from "./Components/Search";
import About from "./Components/Pages/About";
import GithubApiInstance from "./Repository/AxiosInstanceTemplate/GithubApiInstance";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import User from "./Components/User";


class App extends Component {
    //const githubApiInstance = new GithubApiInstance();
    state = {
        users: [],
        user: {},
        loading: false,
        githubApiInstance: new GithubApiInstance(),
        alert: {
            flag: false,
            type: null,
            msg: ""
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.defaultSearchResults();
    }

    defaultSearchResults = async () => {
        const allUsers = await this.state.githubApiInstance.baseUrlLink().get().then(({data}) => data);

        if (allUsers.length) {
            this.setState({users: allUsers, loading: false});
            console.log("Worked");
        }
    }

    searchUser = async (userParam) => {

        this.setState({loading: true});
        let user = await this.state.githubApiInstance.searchUser(userParam).get().then(({data}) => data.items);
        this.setState({users: user, loading: false});
    }

    resetSearchResults = () => {
        this.defaultSearchResults();
    }

    getUser = async (userLoginName) => {
        this.setState({loading: true});
        let user = await this.state.githubApiInstance.getUser(userLoginName).get().then(({data}) => data);
        //console.log(user);
        this.setState({user: user});
        this.setState({loading: false});

    }

    setAlert = (param) => {
        const {flag, type, msg} = param;
        this.setState({
            alert: {

                flag: flag,
                type: type,
                msg: msg

            }
        })
        setTimeout(() => {
            this.setState({
                alert: {

                    flag: false,
                    type: null,
                    msg: ""
                }
            })
        }, 3000)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <h1><Navbar/></h1>
                    <Alert toggleAlert={this.state.alert}/>
                    <Switch>
                        <Route exact path={"/"} render={props => (
                            <Fragment>
                                <Search searchUser={this.searchUser} resetSearchResults={this.resetSearchResults}
                                        setAlert={this.setAlert}/>
                                <div className={"container"}>
                                    <Users loading={this.state.loading} users={this.state.users}/>
                                </div>
                            </Fragment>
                        )}/>

                        <Route exact path={"/about"} render={(props)=>(
                            <About/>
                        )}/>

                        <Route  exact path={"/user/:loginId"} render={props=>(
                            <User  {...props} getUser={this.getUser} user={this.state.user}/>
                            )}/>

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;

// Basic Fundamentals for React Router Dom
// Inside the Router tag, place Switch and inside the Switch, place Route