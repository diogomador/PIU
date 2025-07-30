import { useState, useEffect } from "react";
import "./BackgroundInput.css";

const COLORS = [
  "#FF5733", // vermelho
  "#33FF57", // verde
  "#3357FF", // azul
  "#F1C40F", // amarelo
  "#9B59B6", // roxo
  "#1ABC9C", // ciano
  "#E67E22", // laranja
  "#34495E", // azul escuro
  "#E84393", // rosa
  "#2ECC40", // verde claro
];

export default function BackgroundText() {
  const [inputValue, setInputValue] = useState("");

// Efeito para alterar o fundo do body com base no valor do input
  useEffect(() => {
    if (inputValue.length > 0) {
      // Seleciona a cor baseada no tamanho do input
      const colorIndex = (inputValue.length - 1) % COLORS.length;
      document.body.style.backgroundColor = COLORS[colorIndex];
    } else {
      document.body.style.backgroundColor = "";
    }
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [inputValue]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder="Digite algo para mudar a cor"
    />
  );
}