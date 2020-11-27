import './App.css';
import React, {Component, Fragment} from 'react';
import './Components/Navbar'
import Navbar from "./Components/Navbar";
import Users from "./Components/Users"
import dotenv from 'dotenv'
import GitHubInstance from "./Repository/AxiosInstanceTemplate/GithubApiInstance";


class App extends Component {

    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        dotenv.config();
        this.setState({loading: true});
        let allUsers = await GitHubInstance.get().then(({data}) => data);

        if(allUsers.length){
            this.setState({users: allUsers, loading: false});
            console.log("Worked");
        }

    }

    render() {
        return (
            <div className="App">
                <h1><Navbar/></h1>
                <div className={"container"}>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
