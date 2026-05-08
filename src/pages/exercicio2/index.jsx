import { useState } from 'react'
import './style.css'

function Exercicio2 () {
    const[hora,setHora]=useState("")
    const[resultado,setResultado]=useState("")


    function handleSubmit(e){
        e.preventDefault()

        if(hora > 5){
            setResultado("Bom Dia")

        }
      
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Digite o horario:</label>
            <input
            type="text"
            value={hora} 
            onChange={(e)=> setHora(e.target.value)}
            />
<br/>


            <button type='submit'>Enviar</button>
            <p>{resultado}</p>
        </form>

    

        </>
    )
}
export default Exercicio2