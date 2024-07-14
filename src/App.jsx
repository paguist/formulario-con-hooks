import React, { useState } from 'react'
import Formulario from './Formulario/Formulario'
import DatosMostrados from './Datos/DatosMostrados'
import './App.css';

const App = () => {

  const [datosFormulario, setDatosFormulario] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
  })
  
  return(
    <>
      <Formulario datosFormulario ={datosFormulario} setDatosFormulario = {setDatosFormulario} />
      <DatosMostrados datosFormulario ={datosFormulario} />
    </>
  )
}


export default App