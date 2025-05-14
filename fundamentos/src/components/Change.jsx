import { useState } from "react"

export default function Change(){
    // Não funciona pois não existe nada que resgate e exiba a alteração do valor, por isso usamos o useState() já que ele olha o estado de algo
    
    // let valor = 0

    const [valor, setValor] = useState(0)
    return(
        <>
        <div>
            <button onClick={() => setValor( valor + 1)}> {valor} Cliques</button>
        </div>
        </>
    )
}
