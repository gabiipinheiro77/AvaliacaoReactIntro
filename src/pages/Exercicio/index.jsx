import { useState } from 'react'
import './style.css'

function Exercicio () {
    const[produto,setProduto]=useState("")
    const[preco,setPreco]=useState("")
    const[resultado,setResultado]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        setResultado ("O produto: "+produto + " custa: " + preco + " reais")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Digite o nome do produto:</label>
            <input
            type="text"
            value={produto} 
            onChange={(e)=> setProduto(e.target.value)}
            />
<br/>
        <label>Digite o preço do produto:</label>
            <input
            type="text"
            value={preco} 
            onChange={(e)=> setPreco(e.target.value)}
            />

            <button type='submit'>Enviar</button>
            <p>{resultado}</p>
        </form>

    

        </>
    )
}
export default Exercicio