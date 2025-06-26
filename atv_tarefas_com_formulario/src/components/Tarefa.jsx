import "./Tarefa.css"
import { useState } from 'react';

export default function Tarefa() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

    function handleSubmit(e) {
    e.preventDefault();
    setLista([...lista, tarefa]);
    setTarefa('');
    }

    function handleReset() {
    setLista([]);
  }

  return (
    <div>
        <h2>Lista de Tarefas</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Tarefa:</span>
                <input type="text" value={tarefa} placeholder="Digite o nome da Tarefa" onChange={(e) => setTarefa(e.target.value)}/>
            </label>
            <button type="submit">Adicionar</button>
        </form>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
        <button onClick={handleReset}>Resetar Tarefas</button>
    </div>
  );
}
