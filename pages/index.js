import React from "react";
import AppBar from "../components/AppBar";
import Card from "../components/Card";
import Results from "../components/Results";
import fetch from "isomorphic-unfetch";

class Index extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search: '',
            count: 0,
            items: []
        };
    }

    static getInitialProps = function() {
        return {
            items: []
        }
    };

    onSearch(searchedTerm) {
        this.setState({
            search : searchedTerm
        });
    }

    searchNow() {
        fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    count: data.total_count,
                    items: data.items
                });

                console.log(data);
            });
    }

    render() {

        return (
            <div>
                <AppBar searching={this.onSearch.bind(this)} searchingNow={this.searchNow.bind(this)}/>
                <Results count={this.state.count}/>
                {this.state.items.map((item) => (
                    <Card cardData={item}/>
                ))}
            </div>
        )
    }
}

export default Index