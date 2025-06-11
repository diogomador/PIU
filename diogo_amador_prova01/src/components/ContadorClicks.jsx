import './ContadorClicks.css'
import { useState } from 'react'

export default function ContadorClicks() {
    const [contador, setContador] = useState(0)
    // [contador, setContador] é uma variável + função pra mudar ela.
    // useState(0) define o valor inicial (0).
    // Quando chamamos setContador, o React redesenha o componente com o novo valor.

    const classeIncremento = contador > 10 ? 'btn_add grande' : 'btn_add'
    const classeDecremento = contador < 0 ? 'btn_rem pequeno' : 'btn_rem'
    // Aqui estou criando minhas condicionais e armazenando elas em uma váriavel que "muda de nome" conforme eu preciso

    return (
        <div>
            <h1>O contador está em {contador}</h1>

            <button className={classeIncremento} onClick={() => setContador(contador + 1)}>
                Adicionar 1
            </button>

            {/* E aqui estou utilizando as váriaveis que criei antes para serem o nome da minha classe, onde cada classe tem um tamanho diferente no css */}

            <button className={classeDecremento} onClick={() => setContador(contador - 1)}>
                Remover 1
            </button>
        </div>
    )
}
