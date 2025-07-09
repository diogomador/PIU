export default function Conquistas({ conquistas }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>🎖 Conquistas Desbloqueadas</h3>
      {/* Verifica se ainda não existem conquistas */}
      {conquistas.length === 0 ? (
        // Se não houver, mostra uma mensagem motivacional
        <p>Você ainda não tem conquistas. Continue avançando!</p>
      ) : (
        // Se houver conquistas, mostra cada uma em uma lista
        <ul>
          {conquistas.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
