import React from 'react';
import axios from 'axios';
import Saskaita from './Saskaita'
import './Saskaitos.css'

 class Saskaitos extends React.Component {

  state ={
      saskaitos:[]
    }
   
  
  
    componentDidMount() {
      axios.get(`http://localhost:8080/saskaitos`)
        .then(res => {
          console.log(res)
          const saskaitos = res.data;
          this.setState({ saskaitos });
        })
    }
  
   
    render(){
      let fakturos = this.state.saskaitos.map((saskaita)=>{
          return  <Saskaita key={saskaita.id} saskaita={saskaita}/>
      })
      return(
        
          <table>
          {fakturos}
          </table>
          
      )
  }

  }
  export default Saskaitos;
