// Componente que altera o fundo do aplicativo a medida que o usuário insere dados em um input
import { useState, useEffect } from "react";
import "./BackgroundInput.css"; // Importando o CSS para o componente
export default function BackgroundInput() {
    // Estado para armazenar o valor do input
    const [inputValue, setInputValue] = useState("");

    // Efeito para alterar o fundo do body com base no valor do input
    useEffect(() => {
        if (inputValue) {
            document.body.style.backgroundColor = inputValue;
        } else {
            document.body.style.backgroundColor = ""; // Reseta o fundo se o input estiver vazio
        }
        // Limpeza ao desmontar
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [inputValue]);

    // Função para lidar com a mudança do input
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Digite uma cor ou código hexadecimal" 
        />
    );
}