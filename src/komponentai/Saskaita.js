import React from 'react';
import axios from 'axios';


class saskaita extends React.Component{
    SaskaitosTrinimas=()=>{
        console.log("bandysiu trinti "+this.props.saskaita.id);
         axios.delete(`http://localhost:8080/saskaitos/`+this.props.saskaita.id)
           .then(res => {
             console.log(res);
             console.log(res.data);
             window.location.reload();
           })
    
    }

    render(){
    return(
        
           
        <tbody>  
                    <tr>
            <td>id : {this.props.saskaita.id} </td>
            <td>Numeris saskaitos: {this.props.saskaita.numeris} </td>
            <td>Išrašė: {this.props.saskaita.imone} </td>
            <td>Gavėjas: {this.props.saskaita.gavejas} </td>
            <td>Israsymo data : {this.props.saskaita.data} </td>
            

           <td> <button onClick={this.SaskaitosTrinimas} >delete</button></td>
            </tr>
            </tbody>

            
        
    )
    }

}
export default saskaita;
