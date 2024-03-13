import {useState} from 'react';
import PropTypes from 'prop-types';

export const Counter = ({value}) =>{
    const [contador, setContador] = useState( value )
    
    const handleAdd = () => {
        
        setContador(contador+1)
    }
    
    const handleSubstract = () =>{
        setContador(contador-1)
    }
    
    const handleReset = () =>{
        setContador(value)
    }
    
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{contador}</h2>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    )
}

Counter.propTypes ={
    value: PropTypes.number.isRequired
}

