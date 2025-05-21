import './Galeria.css'
import ChangeBackground from './ChangeBackground'
import PersonagemSelector from './PersonagemSelector'

export default function Galeria() {


    return(
        <>
        <div>
            <h1>Bem-vindo ao meu site</h1>
            <PersonagemSelector />
            <ChangeBackground />
        </div>
        </>
    )
}