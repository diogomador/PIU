import { useState } from 'react'; 
// Importa o hook useState do React para criar estados dentro do componente

export default function ChangeBackground() { 
  // Define o componente funcional ChangeBackground que será exportado

  const [corAtual, setCorAtual] = useState('#f5f5f5'); 
  // Cria um estado chamado corAtual para guardar a cor de fundo atual da página
  // Inicialmente o fundo é branco ('#f5f5f5')

  const [corTexto, setCorTexto] = useState('#1e1e2f'); 
  // Cria um estado chamado corTexto para guardar a cor do texto atual da página
  // Inicialmente o texto é preto ('#1e1e2f')

  function handleColor() { 
    // Função que será chamada quando o usuário clicar no botão para mudar o tema

    const novaCor = corAtual === '#f5f5f5' ? '#1e1e2f' : '#f5f5f5'; 
    // Se o fundo atual é branco, a nova cor será preta, e vice-versa

    const novaCorTexto = corTexto === '#1e1e2f' ? '#f5f5f5' : '#1e1e2f'; 
    // Se o texto atual é preto, a nova cor será branca, e vice-versa

    document.body.style.backgroundColor = novaCor; 
    // Altera a cor do fundo do corpo da página diretamente no DOM

    document.body.style.color = novaCorTexto; 
    // Altera a cor do texto do corpo da página diretamente no DOM

    setCorAtual(novaCor); 
    // Atualiza o estado corAtual para a nova cor do fundo

    setCorTexto(novaCorTexto); 
    // Atualiza o estado corTexto para a nova cor do texto
  }

  function nomeCor() { 
    // Função que retorna o nome do tema para mostrar no botão

    return corAtual === '#f5f5f5' ? 'Escuro' : 'Claro'; 
    // Se o fundo é branco, o botão mostrará que ao clicar muda para o tema Escuro
    // Caso contrário, muda para o tema Claro
  }

  return (
    <>
      <div>
        <button onClick={handleColor}> 
          {/* Botão que chama a função para trocar as cores ao ser clicado */}

          Mude para o tema {nomeCor()} 
          {/* Mostra o nome do tema para o qual o usuário vai mudar */}
        </button>
      </div>
    </>
  );
}
