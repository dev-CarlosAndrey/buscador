import {FiSearch} from 'react-icons/fi';

function App() {
  return (
    <div className="container">
<h1 className="title"> Buscador CEP </h1>

<div>

<input
type = "text"
placeholder="Digite seu cep ..."
/>

<button className="buttonSearch">
  <FiSearch size={25} color="#000"/>
</button> 

</div>

<main className='main'>
  <h2> CEP: 79003222 </h2>
</main>

<span>Rua Teste algum</span>
<span>Complemento: Algum complento</span>
</div>
  );
}

export default App;