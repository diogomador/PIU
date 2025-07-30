import { useState, useEffect } from "react";
export default function RenderAlbuns() {
    const [albuns, setAlbuns] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        // Função para buscar os albuns da API
        async function fetchAlbuns() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/albums");
                const data = await response.json();
                setAlbuns(data);
            } catch (error) {
                console.error("Erro ao buscar albuns:", error);
            }
        }
        fetchAlbuns();
    }, []);

    // Filtra os albuns pelo userId se estiver definido
    const albunsFiltrados = userId ? albuns.filter(album => album.userId == userId) : albuns;

    return (
        <div>
            <h2>Lista de Albuns</h2>
            <input
                type="number"
                placeholder="Digite o User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <ul>
                {albunsFiltrados.map((album) => (
                    <li key={album.id}>
                        <h3>{album.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}