import { createContext, useContext, useState } from 'react';

const userContext = createContext(null); //creamos el context

export const useUser = () => useContext(userContext); //creamos nuestro propio hook

export function UserProvider({children}) {
    const [user, setUser] = useState(null)

    const value = {user, setUser};

    //envolvemos a todos los hijos y le pasamos el valor del contexto, que es un estado,
    //para que se pueda cambiar desde los children
  return (
    <userContext.Provider value={value}> 
        {children}
    </userContext.Provider>
  )
}
