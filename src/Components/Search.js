import React, {Component} from "react";

export class Search extends Component {

    state = {
        text: 'Type a user name to begin search....',
        reset: false,
    };

    searchBarOnChange = (param) => {
        this.setState({[param.target.name]: param.target.value});
    }

    searchBarOnSubmit = (param) => {
        param.preventDefault();
        this.props.searchUser(this.state.text);
        console.log(this.state.text);
    }
    pressedReset = (param) =>{
        param.preventDefault();
        this.setState({reset: true});
        this.props.resetSearchResults();
        this.setState({reset: false});
    }

    render() {
        return (
            <div>
                <form className={"form"} onSubmit={this.searchBarOnSubmit}>
                    <input type={"text"} name={"text"} onChange={this.searchBarOnChange} placeholder={this.state.text}/>
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