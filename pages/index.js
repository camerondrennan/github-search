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
    }

    searchNow() {
        fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.items
                });
            });
    }

    render() {

        return (
            <div>
                <AppBar searching={this.onSearch.bind(this)} searchingNow={this.searchNow.bind(this)}/>
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