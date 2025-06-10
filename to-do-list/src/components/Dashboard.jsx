import ChangeBackground from "./ChangeBackground"; 
// Importa o componente que troca o tema (fundo e cor do texto)

import './Dashboard.css' 
// Importa o arquivo CSS com estilos para esse componente (se tiver)

import Tarefa from "./Tarefa"; 
// Importa o componente que mostra cada tarefa individualmente

import tarefas from "./tarefas"; 
// Importa o array com a lista das tarefas

export default function Dashboard({ children }) { 
  // Define o componente Dashboard que pode receber conteúdo via 'children'

  return (
    <div>
      <h2>Minha Lista de Tarefas</h2> 
      {/* Título fixo para o dashboard */}

      {/* Exibe qualquer conteúdo que for passado entre as tags do Dashboard */}
      <div>{children}</div> 

      {/* Percorre o array 'tarefas' e para cada item cria um componente Tarefa */}
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} texto={tarefa.texto} />
        // Passa o id como key (para ajudar o React a identificar cada item)
        // Passa o texto da tarefa para o componente Tarefa exibir
      ))}

      <ChangeBackground /> 
      {/* Renderiza o componente para trocar o tema */}
    </div>
  );
};
