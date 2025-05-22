import { useState } from 'react';
import './App.css';
import Tema from './components/Tema';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import bob from './assets/Bob.webp';
import naruto from './assets/Naruto.webp';
import pikachu from './assets/Pikachu.jpg';
import shrek from './assets/Shrek.webp';
import miranha from './assets/Miranha.jpg';
import deyvin from './assets/Deyverson.webp';

export default function App() {
    const personagens = [
        {
            id: 1,
            nome: 'Bob Esponja',
            imagem: bob,
            descricao: 'Faz uns hamburguer massa.'
        },
        {
            id: 2,
            nome: 'Naruto',
            imagem: naruto,
            descricao: 'Faz uns jutsu aí... TÔ CERTO DATEBAYO.'
        },
        {
            id: 3,
            nome: 'Pikachu',
            imagem: pikachu,
            descricao: 'Solta raio e os krai.'
        },
        {
          id: 4,
          nome: 'Shrek',
          imagem: shrek,
          descricao: 'O ogro mais musculoso dos pântanos.'
        },
        {
          id: 5,
          nome: 'Homem-Aranha',
          imagem: miranha,
          descricao: 'E quem disse que isso é problema meu?'
        },
        {
          id: 6,
          nome: 'Deyverson',
          imagem: deyvin,
          descricao: 'O segundo maior cai cai do mundo.'
        }
    ];

    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    return (
        <div>
            <Tema />
            <h1>Galeria de Personagens</h1>
            <Galeria personagens={personagens} onSelecionar={setPersonagemSelecionado} />
            <Detalhes personagem={personagemSelecionado} />
        </div>
    );
}
