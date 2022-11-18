import './App.css'
import { Link } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <h1>React use Context</h1>
      <p>Supongamos que se obtiene info de un usuario desde un backend</p>
      <div>
        <b>En este botón: </b>
        <Link to='/form'>
          <button className='button'>Ingresa tus datos</button>
        </Link>
      </div>
    </div>
  )
}

export default App
