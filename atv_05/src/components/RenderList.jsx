import { useState, useEffect } from "react";

export default function RenderList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Função para buscar dados de uma API e atualizar o estado
        async function fetchData() {
            try {
                // Usando uma API pública para obter dados de exemplo
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        // Chama a função para buscar os dados quando o componente é montado
        fetchData();
    }, []);

 // Filtra os posts cujo título começa com a letra "p" ou "P". Totalmente opcional, mas interessante para a atividade.
    // const filtro = items.filter(item => item.title[0]?.toLowerCase() === "p");

    return (
        <div>
            <h2>Lista de Itens {/*(título começa com 'P')*/}</h2>
            <ul>
            {/* Se o filtro for usado, substituir items por filtro */}
                {items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}