import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Console from './Console';

function Consoles(){
    const [consoles, setConsoles]= useState([]);
    const [chosenConsole, setChosenConsole]= useState([null]);
    useEffect(()=>{
        //http request
        axios.get('http://csc225.mockable.io/consoles').then((response)=>{
            setConsoles(response.data);
        });
    },[]);

    if(consoles.length === 0){
        return <p><b>Veuillez patienter...This site is loading...</b></p>;
    }

    if(!!chosenConsole){
        return (
            <div>
                <Console id={chosenConsole} />
                <button onClick={() => setChosenConsole(null)}>Reset</button>
            </div>
        ); 
    }
   
    return (
        <div>
            {consoles.map((console) => {
                return (
                    <p key={console.id}>
                        <button onClick={() => setChosenConsole(console.id)}>
                            {console.name} - {console.price}
                        </button>
                    </p>);
            })}
        </div>
    );
        
    
    
}

export default Consoles;