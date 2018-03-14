import React from 'react';

const saskaita =(props)=>{
    return(
        <ul>
            <div>
            <p>Numeris saskaitos: {props.saskaita.numeris} </p>
            <p>Išrašė: {props.saskaita.imone} </p>
            <p>Gavėjas: {props.saskaita.gavejas} </p>
            <p>Israsymo data : {props.saskaita.data} </p>
</div>
            
        </ul>
    )
}

export default saskaita;
