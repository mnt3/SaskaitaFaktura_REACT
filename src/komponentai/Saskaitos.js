import React from 'react';
import axios from 'axios';

export default class Saskaita extends React.Component {
    state = {
      saskaitos: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:8080/saskaitos`)
        .then(res => {
          console.log(res)
          const saskaitos = res.data;
          this.setState({ saskaitos });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.saskaitos.map(person => <li>{person.numeris}</li>)}
        </ul>
      )
    }
  }
