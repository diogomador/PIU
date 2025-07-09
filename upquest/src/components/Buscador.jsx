export default function Buscador({
    buscaTermo,
    setBuscaTermo,
    setFiltroAtivo,
    filtroPrioridade,
    setFiltroPrioridade
}) {
    function handleSubmit(e) {
        e.preventDefault();
        setFiltroAtivo(buscaTermo.trim());
    }

    function limparBusca() {
        setBuscaTermo("");
        setFiltroAtivo("");
        setFiltroPrioridade("Todas");
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "2rem", textAlign: "center" }}>
            <input
                type="text"
                placeholder="Digite um termo para buscar..."
                value={buscaTermo}
                onChange={(e) => setBuscaTermo(e.target.value)}
                style={{
                    padding: "0.5rem",
                    borderRadius: "5px",
                    border: "1px solid #444",
                    width: "60%",
                    marginRight: "1rem"
                }}
            />

            <select
                value={filtroPrioridade}
                onChange={(e) => setFiltroPrioridade(e.target.value)}
                style={{
                    padding: "0.5rem",
                    borderRadius: "5px",
                    marginRight: "1rem"
                }}
            >
                <option value="Todas">Todas as prioridades</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
            </select>

            <input
                type="submit"
                value="Buscar"
                style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#7dafff",
                    color: "#1e1e2e",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginRight: "1rem"
                }}
            />

            <button
                type="button"
                onClick={limparBusca}
                style={{
                    backgroundColor: "#ffb6b6",
                    color: "#1e1e2e",
                    padding: "0.5rem 1rem",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Limpar busca
            </button>
        </form>
    );
}