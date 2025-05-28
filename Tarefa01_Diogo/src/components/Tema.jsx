import { useState } from 'react';

export default function Tema() {
    // Variável (cor...) e função que vai alterar/atualizar a variável(set...), isso é o 'useState' 
    const [corAtual, setCorAtual] = useState('white');
    const [corTexto, setCorTexto] = useState('black');

    // Pode ser chamado de toggle também (toggleTheme) por exemplo.
    function handleColor() {
        const novaCor = corAtual === 'white' ? 'black' : 'white';
        const novaCorTexto = corTexto === 'black' ? 'white' : 'black';
        document.body.style.backgroundColor = novaCor;
        document.body.style.color = novaCorTexto;
        setCorAtual(novaCor);
        setCorTexto(novaCorTexto);
    }

    function nomeCor() {
        return corAtual === 'white' ? 'Escuro' : 'Claro';
    }

    return (
        <>
            <div>
                <button className="botao-tema" onClick={handleColor}>
                    Mude para o tema {nomeCor()}
                </button>
            </div>
        </>
    );
}
