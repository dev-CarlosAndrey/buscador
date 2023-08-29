import {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';


function App() {

const [input, setInput] = useState('')

function handleSearch(){
  alert('VALOR DO INPUT ' + input)

}

return (
<div className="container">
<h1 className="title"> Buscador CEP </h1>

<div className='containerInput'>

<input 

type = "text"
placeholder="Digite seu cep ..."
value={input}
onChange={(e) =>setInput(e.target.value)}
/>

<button className="buttonSearch" onClick={handleSearch}>
  <FiSearch size={25} color= " #fff " />
</button> 

</div>

<main className='main'>

  <h2> CEP: 79003222 </h2>
  <span> Rua Teste algum </span>
  <span> Complemento: Algum complento </span>
  <span> Vila Rosa </span>
  <span> Campo Grande - MS </span>
  
</main>

</div>

  );
  
  }

export default App;