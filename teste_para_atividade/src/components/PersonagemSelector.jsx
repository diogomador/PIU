import { useState } from 'react';

export default function PersonagemSelector() {
    const personagens = [
        {
            id: 1,
            nome: 'Bob Esponja',
            imagem: 'https://cinemacao.com/wp-content/uploads/2016/12/bob-esponja-3-1130x590.jpg',
            descricao: 'Faz uns hamburguer massa '
        },
        {
            id: 2,
            nome: 'Naruto',
            imagem: 'https://recreio.com.br/media/_versions/animacoes/naruto_uzumaki_capa_widelg.jpg',
            descricao: 'Faz uns jutsu aí... TÔ CERTO DATEBAYO'
        },
        {
            id: 3,
            nome: 'Pikachu',
            imagem: 'https://i.scdn.co/image/ab67616d0000b273cfeae645958e9248abff0710',
            descricao: 'Solta raio e os krai'
        }
    ];

    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    function selecionarPersonagem(personagem) {
        setPersonagemSelecionado(personagem);
    }

    return (
        <div>
            <h1>Selecione um Personagem</h1>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                {personagens.map((personagem) => (
                    <div key={personagem.id} style={{ textAlign: 'center' }}>
                        <img
                            src={personagem.imagem}
                            alt={personagem.nome}
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => selecionarPersonagem(personagem)}
                        />
                        <p>{personagem.nome}</p>
                    </div>
                ))}
            </div>

            {personagemSelecionado && (
                <div style={{ textAlign: 'center' }}>
                    <h2>{personagemSelecionado.nome}</h2>
                    <img
                        src={personagemSelecionado.imagem}
                        alt={personagemSelecionado.nome}
                        style={{ width: '300px', marginBottom: '20px' }}
                    />
                    <p>{personagemSelecionado.descricao}</p>
                </div>
            )}
        </div>
    );
}
