import React from 'react';
import axios from 'axios';

export default class PridetiSaskaitas extends React.Component {
  state = {
    numeris: "",
    imone: "",
    gavejas : ""
    
  }

  handleChange1 = event => {
    this.setState({ numeris: event.target.value });
  
  }
  handleChange2 = event => {
    this.setState({ imone: event.target.value });
  
  }
  handleChange3 = event => {
    this.setState({ gavejas: event.target.value });
  
  }

  refresh(){
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();

    const saskaitos = {
      numeris: this.state.numeris,
      imone: this.state.imone,
      gavejas: this.state.gavejas

    };

    axios.post(`http://localhost:8080/saskaitos`, {  numeris: this.state.numeris,
    imone: this.state.imone,
    gavejas: this.state.gavejas })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <p>
          <label>
            Israsanti imone:
            <input type="text" name="imone" onChange={this.handleChange2} />
          </label>
          </p>
          <p>
          <label>  
            Gavejas:
            <input type="text" name="gavejas" onChange={this.handleChange3} />
          </label>
          </p>
          <p>
          <label>  
            Saskaitos numeris:
            <input type="text" name="numeris" onChange={this.handleChange1} />
          </label>
          </p>
          <button type="submit" >Add</button>
          
        </form>
       
      </div>
    )
  }
}