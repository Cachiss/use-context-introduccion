import { useState } from 'react';
import{useUser} from '../hooks/useUser';

const user = useUser(); //consumiendo el hook personalizando
function Form() {
    const [name, setName] = useState('');
    const {user,setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name});
    }
    return (
    <>
        <h1>Formulario para capturar tus datos</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Escribe tu nombre: </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <br />
            <button type="submit">Enviar</button>
        </form>

        {user && <p>Hola: {user.name} context</p>}
    </>
  )
}

export default Form