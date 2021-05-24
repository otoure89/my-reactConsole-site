import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Console(props){
    const { id }= props;
    const [console, setConsole]= useState(null);
    
    useEffect(()=>{
        //http request
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response)=>{
            setConsole(response.data);
        });
    },[]);
    
    if(!console){
        return <p><b>Veuillez patienter...Loading Console ID {id}</b></p>;
    }

    return (
        <p>
            <img src={console.image} alt={console.name} />
            <b>Thank you for choosing {console.name} at {console.price} 
            in {console.country} released in {console.releaseyear}</b>
        </p>
    );
}

export default Console;