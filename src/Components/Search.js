import React, {Component} from "react";

export class Search extends Component {

    state = {
        text: 'Type a user name to begin search....',
    };

    searchBarOnChange = (param) => {
        this.setState({[param.target.name]: param.target.value});
    }

    searchBarOnSubmit = (param) =>{
        param.preventDefault();
        console.log(this.state.text);
    }

    render() {
        return (
            <div>
                <form className={"form"} onSubmit={this.searchBarOnSubmit}>
                    <input type={"text"} name={"text"} onChange={this.searchBarOnChange} placeholder={this.state.text}/>
                    <button className={"btn btn-dark btn-block"} >Submit!</button>
                </form>
            </div>
        );
    }
}

export default Search;