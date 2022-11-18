import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserProvider } from './hooks/useUser'
//importar pages
import Form from './pages/Form';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/form' element={<Form />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserProvider></React.StrictMode>
)
