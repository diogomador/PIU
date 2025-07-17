import { useState } from "react";

export default function EnviarDados() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const API = "http://127.0.0.1:8000/tarefas/";

  const enviarDados = async () => {
    if (!titulo || !descricao) {
      alert("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    const novaTarefa = {
      titulo,
      descricao,
      concluida: false,
    };

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTarefa),
      });

      const data = await response.json();
      console.log("Resposta da API:", data);
      alert("Tarefa criada com sucesso!");
      setTitulo("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao criar tarefa");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Criar Nova Tarefa</h2>

      <label>
        Título: <br />
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          disabled={loading}
        />
      </label>
      <br /><br />

      <label>
        Descrição: <br />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          disabled={loading}
        />
      </label>
      <br /><br />

      <button onClick={enviarDados} disabled={loading}>
        {loading ? "Enviando..." : "Criar Tarefa"}
      </button>
    </div>
  );
}
