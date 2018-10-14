import React from "react";
import AppBar from '../components/AppBar';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search: '',
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

        fetch(`https://api.github.com/search/repositories?q=${this.state.search}+language:assembly&sort=stars&order=desc`)
            .then(res => res.json())
            .then(data => {
                if(data.items) {
                    this.state.items = data.items;
                }
                console.log("search results:");
                console.log(data);
            });
    }

    render() {

        return (
            <div>
                <AppBar searching={this.onSearch.bind(this)}/>
                <ul>
                    {this.state.items.map((item) => (
                        <li>
                            <a>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Index