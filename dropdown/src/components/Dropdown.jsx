import './Dropdown.css';

export default function Dropdown() {
  const opcoes = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];

  return (
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Opções</a>
          <ul className="dropdown">
            {opcoes.map((opcao, index) => (
              <li key={index}>
                <a href="#">{opcao}</a>
              </li>
            ))}
          </ul>
        </li>
        <li><a href="#">Sobre Nós</a></li>
      </ul>
    </div>
  );
}
