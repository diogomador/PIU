import { useState } from 'react';
export default function ChangeBackground() {
    const [email, setEmail] = useState('');
    const [colorIndex, setColorIndex] = useState('');
    const colors = ['red', 'green', 'blue', 'white', 'purple'];
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // verifica se o índice está dentro do intervalo válido (0 até 4)
        if (colorIndex >= 0 && colorIndex < colors.length) {
        document.body.style.backgroundColor = colors[colorIndex];
        } else {
        alert('Por favor, insira um número válido para a cor.');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <h1>Alterar Cor de Fundo</h1>
        <p>Digite seu email e um número de 0 a 4 para mudar a cor de fundo.</p>
        <ol start={0}>
            <li>Vermelho</li>
            <li>Verde</li>
            <li>Azul</li>
            <li>Branco</li>
            <li>Roxo</li>
        </ol>
        <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="number"
            placeholder="Digite um número de 0 a 4"
            value={colorIndex}
            onChange={(e) => setColorIndex(e.target.value)}
            required
        />
        <button type="submit">Enviar</button>
        </form>
    );
}
