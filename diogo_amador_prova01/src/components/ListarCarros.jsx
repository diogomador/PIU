import { carros } from "./dados_carros";
export default function ListarCarros() { 
    const FiltroCarros = carros.filter(carro => carro.ano > 2019);
    // Criação de uma variável que armazena o filtro que eu defini, percorrendo o array

  return (
    <>
        <div className="ListarCarros">
        <h2>Minha Lista de Carros</h2> 

        <ul>
        {carros.map((carro) => (
            <li key={carros.id}> Modelo: {carro.modelo} <br /> Cor: {carro.cor}</li>
        ))}
        {/* Aqui estou percorrendo o array com a função map, ele transforma cada carro em um <li> para mostrar na lista. */}
        {/* Cada item precisa de uma key única para o React saber qual item é qual, nesse caso é o id */}

        </ul>
        </div>
        <ul>
            <h2>Carros com anos superiores a 2019</h2>
        {FiltroCarros.map((carro) => (
            <li key={carros.id}> Modelo: {carro.modelo} <br /> Ano: {carro.ano}</li>
        ))}
        {/* Aqui estou usando a mesma lógica, só q dessa vez estou percorrendo pela variável que defini lá no começo */}
        </ul>
    </>
  );
};