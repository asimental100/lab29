import React, { Component } from 'react';
import { fetches } from '../services/fetches';
import { Header } from '../components/header/header';
import { Search } from '../search/search';
import { Responses } from '../responses/responses';
import styles from './home.css';

export class Home extends Component {
  state = {
    url: "",
    method: "",
    response: {},
    json: {}
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = async() => {
    const { url, method, json } = this.state;
    
    const response = await fetches(url, method, json);
    this.setState({ response });
  };

  render() {
    const { response } = this.state;
    return (
      <div className={styles.mainDiv}>
        <Header />
        <Search onChange={this.handleChange} onClick={this.handleClick} />
        <Responses response={{response}} />
      </div>      
    )
  }
}
