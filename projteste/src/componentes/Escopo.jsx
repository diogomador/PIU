function Escopo(){
    const label = "Clique Aqui"
    function handleClick(){
        return(
            alert("Alerta")
        )
    }
    return(
        <>
        <div>
            <h2>Teste de componentes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum minima veritatis iste perspiciatis quos accusamus, ullam consequatur nam? Enim incidunt nulla corporis, sed autem rem quibusdam dolor reiciendis accusantium.</p>
        </div>
        <div>
            <button onClick={()=>console.log("Salve")}>{label}</button>
        </div>
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
        </>
    )
}

export default Escopo