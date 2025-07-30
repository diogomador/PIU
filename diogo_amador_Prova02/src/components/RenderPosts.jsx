import { useState, useEffect } from "react";
export default function RenderPosts() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
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
    }, []);
 
    const postsFiltrados = userId ? posts.filter(post => post.userId == userId) : posts;

    return (
        <div>
            <h2>Filtragem dos posts pelo id de usuário</h2>
            <input
                type="number"
                placeholder="Digite o User ID" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <ul>
                {postsFiltrados.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}