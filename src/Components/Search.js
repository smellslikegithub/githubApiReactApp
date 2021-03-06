import React, {Component} from "react";

export class Search extends Component {

    state = {
        text: "",
        reset: false,
    };

    searchBarOnChange = (param) => {
        this.setState({[param.target.name]: param.target.value});
    }

    searchBarOnSubmit = (param) => {
        param.preventDefault();
        if(this.state.text === ""){
            this.props.setAlert({flag: true, type: "light", msg: "Search Field Cannot Be Empty!"});
        }
        else {
            this.props.searchUser(this.state.text);
            this.setState({reset: true});
            console.log(this.state.text);
        }
    }
    pressedReset = (param) =>{
        param.preventDefault();
        if(this.state.reset === true){
            this.props.resetSearchResults();
            this.setState({reset: false});
        }
        else{
            alert("Nothing To Reset!");
        }

    }

    render() {
        return (
            <div>
                <form className={"form"} onSubmit={this.searchBarOnSubmit}>
                    <input type={"text"} name={"text"} onChange={this.searchBarOnChange} placeholder={"Type a user name to begin search...."}/>
                    <div id={"searchButtons"} style={searchButtonsContainer}>
                        <button className={"btn btn-primary searchButton"}>Submit!</button>
                        <button onClick={this.pressedReset} className={"btn btn-dark searchButton "}>Reset!</button>
                    </div>
                </form>
            </div>
        );
    }
}

const searchButtonsContainer = {
    height: "auto",
    width: "100%",
    backgroundColor: "blue",
    float:"left",

};



export default Search;