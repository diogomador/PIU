import "./App.css" // ainda não tem nada
import { useState } from 'react'; 
import Conquistas from "./components/Conquistas";

export default function App() {
  // catálogo das conquistas, cada uma com a quantidade necessária e o nome
  const conquistasCatalogo = [
    { qtd: 5, nome: 'Criador Iniciante' },
    { qtd: 10, nome: 'Criador Bronze' },
    { qtd: 15, nome: 'Criador Prata' },
    { qtd: 20, nome: 'Criador Ouro' },
    { qtd: 30, nome: 'Criador Platina' },
    { qtd: 40, nome: 'Criador Diamante' },
    { qtd: 50, nome: 'Mestre das Tarefas' },
    { qtd: 60, nome: 'Lenda das Tarefas' },
    { qtd: 70, nome: 'Mito das Tarefas' },
    { qtd: 80, nome: 'Semideus da Produtividade' },
    { qtd: 90, nome: 'Deus da Produtividade' },
    { qtd: 100, nome: 'O Supremo Organizador' },
  ];

  // estados principais do app
  const [tarefa, setTarefa] = useState(''); // texto do input da nova tarefa
  const [lista, setLista] = useState([]); // lista de tarefas atuais
  const [conquistas, setConquistas] = useState([]); // conquistas desbloqueadas
  const [contadorTotal, setContadorTotal] = useState(0); // total acumulado de tarefas criadas

  // função chamada ao enviar o formulário
  function handleSubmit(e) {
    e.preventDefault(); // evita recarregar a página
    if (tarefa.trim() === '') return; // impede tarefas vazias

    // adiciona a nova tarefa à lista
    const novaLista = [...lista, { nome: tarefa, status: 'pendente' }];
    setLista(novaLista);
    setTarefa(''); // limpa o input

    // incrementa o contador total
    const novoTotal = contadorTotal + 1;
    setContadorTotal(novoTotal);

    // verifica quais conquistas precisam ser desbloqueadas
    const novasConquistas = conquistasCatalogo
      .filter(conquista => 
        novoTotal === conquista.qtd && // verifica se bate com o total
        !conquistas.includes(conquista.nome) // e se ainda não foi desbloqueada
      )
      .map(conquista => conquista.nome); // pega só o nome

    // se houver conquistas novas, adiciona ao estado
    if (novasConquistas.length > 0) {
      setConquistas(prev => [...prev, ...novasConquistas]);
    }
  }

  // função para resetar a lista de tarefas (mas não o contador total ou conquistas)
  function handleReset() {
    setLista([]);
  }

  // atualiza o status de uma tarefa
  function atualizarStatus(index, novoStatus) {
    const novaLista = [...lista];
    novaLista[index].status = novoStatus;
    setLista(novaLista);
  }

  // move a tarefa para cima ou para baixo na lista
  function moverTarefa(index, direcao) {
    const novaLista = [...lista];
    const novoIndex = index + direcao;

    // evita sair dos limites do array
    if (novoIndex < 0 || novoIndex >= lista.length) return;

    // troca de posição (swap)
    [novaLista[index], novaLista[novoIndex]] = [novaLista[novoIndex], novaLista[index]];
    setLista(novaLista);
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Tarefa:</span>
          <input
            type="text"
            value={tarefa}
            placeholder="Digite o nome da Tarefa"
            onChange={(e) => setTarefa(e.target.value)} // atualiza o input
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>
            <strong>{item.nome}</strong> - <em>{item.status}</em>
            <div>
              <button onClick={() => atualizarStatus(i, 'realizada')}>✅ Realizada</button>
              <button onClick={() => atualizarStatus(i, 'não realizada')}>❌ Não Realizada</button>
              <button onClick={() => atualizarStatus(i, 'pendente')}>🕓 Pendente</button>
              <button onClick={() => moverTarefa(i, -1)}>⬆️</button>
              <button onClick={() => moverTarefa(i, 1)}>⬇️</button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={handleReset}>Resetar Tarefas</button>

      {/* componente que mostra as conquistas desbloqueadas */}
      <Conquistas conquistas={conquistas} />
    </div>
  );
}
