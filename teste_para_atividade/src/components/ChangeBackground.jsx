import { useState } from 'react';

export default function ChangeBackground() {
    const [corAtual, setCorAtual] = useState('white');
    const [corTexto, setCorTexto] = useState('black');

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
                <button onClick={handleColor}>Mude para o tema {nomeCor()}</button>
            </div>
        </>
    );
}
