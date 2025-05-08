import "./Digas.css";

function Digas() {
    function mudaCor() {
        const h1 = document.getElementById("titulo");
        if (h1) {
            const corAtual = h1.style.color || "black";
            h1.style.color = corAtual === "black" ? "blue" : "black";
        }
    }

    const label = "Clique Aqui meu cria";

    return (
        <>
            <div>
                <h1 id="titulo" style={{ color: "black" }}>Salve meu cria</h1>
            </div>
            <div>
                <button onClick={mudaCor}>{label}</button>
            </div>
        </>
    );
}

export default Digas;
