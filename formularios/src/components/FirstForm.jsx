import './FirstForm.css'

export default function FirstForm(){
    return(
        <>
        <form>
            <div>
                <label>
                    <span>Nome:</span>
                    <input type="text" placeholder="Digite seu nome" />
                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}