import { useState, useEffect } from 'react';
import './EffectApi.css';

export default function EffectApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregar, setCarregar] = useState(false); // Controla se os dados devem ser buscados

  useEffect(() => {
    // Só busca os dados se o botão tiver sido acionado
    if (!carregar) return;

    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setCarregar(false); // Reseta o estado após carregar
      }
    };

    fetchUsuarios();
  }, [carregar]); // Só executa quando `carregar` muda para true

  return (
    <div>
      <h1>Dados dos Usuários</h1>

      <div className="tabelas-container">
        <table className="tabela-nomes">
          <thead>
            <tr>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.name}</td>
              </tr>
            ))}
          </tbody>
            <button onClick={() => setCarregar(true)}>Carregar Dados da API</button>
        </table>

        <table className="tabela-usernames">
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.username}</td>
              </tr>
            ))}
          </tbody>
          <button onClick={() => setCarregar(true)}>Carregar Dados da API</button>
        </table>

        <table className="tabela-cidades">
          <thead>
            <tr>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.address.city}</td>
              </tr>
            ))}
          </tbody>
          <button onClick={() => setCarregar(true)}>Carregar Dados da API</button>
        </table>
      </div>
    </div>
  );
}
