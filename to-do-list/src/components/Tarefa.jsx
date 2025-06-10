import { useState } from "react"; 
// Importa o hook useState do React, que permite criar estados dentro do componente

function Tarefa({ texto, corTexto, temaEscuro }) { 
  // Componente funcional que recebe props: texto da tarefa, cor do texto atual e se o tema está escuro

  const [concluida, setConcluida] = useState(false); 
  // Cria o estado "concluida", que indica se a tarefa foi marcada como feita ou não. Inicialmente é false.

  function toggleConcluida() {
    setConcluida(!concluida); 
    // Função que alterna o estado de concluída: se era true, vira false, e vice-versa
  }

  // Se a tarefa está concluída, a cor do texto muda conforme o tema da página (escuro ou claro)
  // Se não está concluída, usa a cor normal do texto do tema atual
  const corConcluida = temaEscuro ? "#bbbbbb" : "gray"; 
  // Usa cinza claro no tema escuro (para não ficar muito escuro) e cinza escuro no tema claro

  const estiloTexto = {
    textDecoration: concluida ? "line-through" : "none", 
    // Se concluída, coloca uma linha cortando o texto, senão nada
    color: concluida ? corConcluida : corTexto, 
    // Cor do texto depende se a tarefa foi concluída ou não
  };

  return (
    <div style={{ marginBottom: 10 }}> 
      {/* Container com uma margem embaixo para espaçar as tarefas */}

      <span style={estiloTexto}>{texto}</span> 
      {/* Mostra o texto da tarefa com o estilo que definimos */}

      <button onClick={toggleConcluida} style={{ marginLeft: 10 }}> 
        {/* Botão que, quando clicado, chama a função que troca o estado concluída */}
        {concluida ? "Desmarcar" : "Concluir"} 
        {/* O texto do botão muda conforme a tarefa já estar marcada ou não */}
      </button>
    </div>
  );
}

export default Tarefa; 
// Exporta o componente para poder ser usado em outros arquivos
