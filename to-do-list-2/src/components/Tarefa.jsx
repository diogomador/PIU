import "./Tarefa.css"
import { useState } from 'react';

export default function Tarefa() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (tarefa.trim() === '') return;
    setLista([...lista, { nome: tarefa, status: 'pendente' }]);
    setTarefa('');
  }

  function handleReset() {
    setLista([]);
  }

  function atualizarStatus(index, novoStatus) {
    const novaLista = [...lista];
    novaLista[index].status = novoStatus;
    setLista(novaLista);
  }

  function moverTarefa(index, direcao) {
    const novaLista = [...lista];
    const novoIndex = index + direcao;

    if (novoIndex < 0 || novoIndex >= lista.length) return;

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
            onChange={(e) => setTarefa(e.target.value)}
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
    </div>
  );
}
