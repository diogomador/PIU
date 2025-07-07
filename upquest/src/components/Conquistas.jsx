export default function Conquistas({ conquistas }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>🎖 Conquistas Desbloqueadas</h3>
      {conquistas.length === 0 ? (
        <p>Você ainda não tem conquistas. Continue avançando!</p>
      ) : (
        <ul>
          {conquistas.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
