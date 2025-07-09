import "./App.css"
import logo from './assets/Logotipo.png'; 
import { useState } from 'react';
import Conquistas from "./components/Conquistas";
import Buscador from "./components/Buscador"

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
  const [prioridade, setPrioridade] = useState(""); // prioridade da tarefa 
  const [conquistas, setConquistas] = useState([]); // conquistas desbloqueadas
  const [contadorTotal, setContadorTotal] = useState(0); // total acumulado de tarefas criadas
  const [buscaTermo, setBuscaTermo] = useState(""); //captura do que está sendo inserido no input
  const [filtroAtivo, setFiltroAtivo] = useState(""); //termo do input que será usado de fato
  const [filtroPrioridade, setFiltroPrioridade] = useState("Todas"); // filtro de prioridade selecionado

  // função chamada ao enviar o formulário
  function handleSubmit(e) {
    e.preventDefault(); // evita recarregar a página

    if (tarefa.trim() === '') return; // impede tarefas vazias, o .trim() remove todos os espaços em branco do início e do final da string.
    if (prioridade === '') {
      alert("Por favor, selecione uma prioridade para a tarefa.");
      return;
    }

    const novaLista = [...lista, {
      nome: tarefa,
      status: 'pendente',
      prioridade: prioridade
    }];
    setLista(novaLista);
    setTarefa(''); // limpa o input
    setPrioridade(''); // limpa o select

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

  // Função para resetar a lista de tarefas (não zera o contador total nem as conquistas)
  function handleReset() {
    // Exibe uma janela de confirmação antes de apagar todas as tarefas
    const confirmar = window.confirm("Tem certeza que deseja resetar todas as tarefas?");

    // Se o usuário clicar em "Cancelar", a função para por aqui
    if (!confirmar) return;

    // Se o usuário confirmar, a lista de tarefas é esvaziada
    setLista([]);
  }

  // atualiza o status de uma tarefa
  function atualizarStatus(index, novoStatus) {
    const novaLista = [...lista];
    novaLista[index].status = novoStatus;
    setLista(novaLista);
  }

  // move a tarefa para cima (direção -1) ou para baixo (direção +1) na lista
  function moverTarefa(index, direcao) {
    const novaLista = [...lista];
    const novoIndex = index + direcao;

    // evita sair dos limites do array
    if (novoIndex < 0 || novoIndex >= lista.length) return;

    // troca de posição (swap)
    [novaLista[index], novaLista[novoIndex]] = [novaLista[novoIndex], novaLista[index]];
    setLista(novaLista);
  }
  
  // Função para excluir uma tarefa da lista
  function excluirTarefa(index) {
    // Exibe uma janela de confirmação antes de excluir a tarefa
    const confirmar = window.confirm("Tem certeza que deseja excluir essa tarefa?");
    
    // Se o usuário cancelar, a função termina sem excluir
    if (!confirmar) return;

    // Cria uma nova lista sem a tarefa que será excluída
    const novaLista = lista.filter((_, i) => i !== index);
    
    // Atualiza o estado com a nova lista
    setLista(novaLista);
  }

  return (
    <div>
      <img src={logo} alt="Logo UpQuest" className="logo" />
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
        <label>
          <span>Prioridade:</span>
          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value="">Selecione</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>

      <Buscador
        buscaTermo={buscaTermo}
        setBuscaTermo={setBuscaTermo}
        setFiltroAtivo={setFiltroAtivo}
        filtroPrioridade={filtroPrioridade}
        setFiltroPrioridade={setFiltroPrioridade}
      />

      <ul>
        {lista.filter((item) => {
          const passaBusca =
          filtroAtivo === "" || item.nome.toLowerCase().includes(filtroAtivo.toLowerCase()); //verifica compatibilidade com o input de busca
          const passaPrioridade =
          filtroPrioridade === "Todas" || item.prioridade === filtroPrioridade;
          return passaBusca && passaPrioridade; // verifica compatibilidade com o select de prioridades
        })
        .map((item, i) => {
          // Renderização diferente para lista filtrada
          if (filtroAtivo !== "") {
            return (
              <li key={i}>
                  <strong>{item.nome}</strong> - <em>{item.status}</em> - <em>Prioridade: {item.prioridade}</em>
                </li>
              );
            }
            
            // Renderização completa (sem filtro)
            return (
              <li key={i}>
                <strong>{item.nome}</strong> - <em>{item.status}</em> - <em>Prioridade: {item.prioridade}</em>
                <div>
                  <button onClick={() => atualizarStatus(i, 'realizada')}>✅ Realizada</button>
                  <button onClick={() => atualizarStatus(i, 'não realizada')}>❌ Não Realizada</button>
                  <button onClick={() => atualizarStatus(i, 'pendente')}>🕓 Pendente</button>
                  <button onClick={() => moverTarefa(i, -1)}>⬆️</button>
                  <button onClick={() => moverTarefa(i, 1)}>⬇️</button>
                  <button onClick={() => excluirTarefa(i)}>🗑️ Excluir</button>
                </div>
              </li>
            );
          })}
      </ul>


      <button onClick={handleReset}>Resetar Tarefas</button>

      {/* componente que mostra as conquistas desbloqueadas */}
      <Conquistas conquistas={conquistas} />
    </div>
  );
}
