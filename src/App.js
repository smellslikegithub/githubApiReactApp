import './App.css';
import React, {Component} from 'react';
import './Components/Navbar'
import Navbar from "./Components/Navbar";
import Users from "./Components/Users"
import Alert from "./Components/Alert";
import Search from "./Components/Search";
import GithubApiInstance from "./Repository/AxiosInstanceTemplate/GithubApiInstance";


class App extends Component {
    //const githubApiInstance = new GithubApiInstance();
    state = {
        users: [],
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

    setAlert = (param) => {
        const {flag, type, msg} = param;
        this.setState({
            alert: {

                flag: flag,
                type: type,
                msg: msg

            }
        })
        setTimeout(()=>{
            this.setState({
                alert: {

                    flag: false,
                    type: null,
                    msg: ""
                }
            })
        },3000)
    }

    render() {
        return (
            <div className="App">
                <h1><Navbar/></h1>
                <Alert toggleAlert={this.state.alert}/>
                <Search searchUser={this.searchUser} resetSearchResults={this.resetSearchResults}
                        setAlert={this.setAlert}/>
                <div className={"container"}>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
