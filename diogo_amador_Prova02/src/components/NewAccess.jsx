import { useState, useEffect } from "react";
import "./NewAccess.css";

export default function NewAccess() {
    const [posts, setPosts] = useState([]);
    const [accessCount, setAccessCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!showModal) return;
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
    }, [accessCount, showModal]);

    return (
        <div>
            <h2>Lista de Posts</h2>
            <button onClick={() => setShowModal(true)}>
                Abrir Lista de Posts
            </button>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="btn-fechar" onClick={() => setShowModal(false)}>Fechar</button>
                        <h2>Lista de Posts</h2>
                        <button onClick={() => setAccessCount(accessCount + 1)}>
                            Recarregar Posts
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
                </div>
            )}
        </div>
    );
}