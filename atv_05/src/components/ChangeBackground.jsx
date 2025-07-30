// Componente para alterar o fundo do aplicativo (dark mode e light mode) usando useEffect
import { useState, useEffect } from "react";
import "./ChangeBackground.css"; // Importando o CSS para o componente

export default function ChangeBackground() {
    // Estado para controlar o modo escuro
    const [darkMode, setDarkMode] = useState(false);

    // Efeito para adicionar ou remover a classe de dark mode no body
    useEffect(() => {
        if (darkMode) {
        document.body.classList.add("dark-mode");
        } else {
        document.body.classList.remove("dark-mode");
        }
        // Limpeza ao desmontar
        return () => {
        document.body.classList.remove("dark-mode");
        };
    }, [darkMode]);

        // Função para alternar entre dark mode e light mode com o clique do botão
    return (
        <button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
    );
};

