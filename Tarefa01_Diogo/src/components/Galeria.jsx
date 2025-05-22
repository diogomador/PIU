import Card from './Card';

export default function Galeria({ personagens, onSelecionar }) {
    return (
        <div className="galeria">
            {personagens.map((personagem) => (
                <Card
                    key={personagem.id}
                    nome={personagem.nome}
                    imagem={personagem.imagem}
                    onClick={() => onSelecionar(personagem)}
                />
            ))}
        </div>
    );
}
