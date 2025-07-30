// Componente que implementa tela de Login e envia as informações para o console
import { useState } from "react";
import "./Login.css";
export default function Login() {
    // Estado para armazenar o nome de usuário e senha
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Usuário:", username);
        console.log("Senha:", password);
    };
    
    return (
        // Renderiza o formulário de login
        <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">Entrar</button>
        </form>
    );
}