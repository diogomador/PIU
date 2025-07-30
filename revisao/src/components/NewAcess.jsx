import { useState, useEffect } from "react";
export default function NewAcess() {
    const [posts, setPosts] = useState([]);
    const [accessCount, setAccessCount] = useState(0);

    useEffect(() => {
        // Função para buscar os posts da API
        async function fetchPosts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            }
        }
        fetchPosts();
    }, [accessCount]);

    return (
        <div>
            <h2>Lista de Posts</h2>
            {/* O botão abaixo acessa os posts novamente toda vez que é clicado, incrementando o contador de acessos. */}
            <button onClick={() => setAccessCount(accessCount + 1)}>
                Acessar Posts
            </button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
