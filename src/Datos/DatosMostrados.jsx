const DatosMostrados = ({ datosFormulario })=>{
    return (
      <>
        <h3>Your from data</h3>
        <p> First name: {datosFormulario.firstName} </p>
        <p> Last name: {datosFormulario.lastName} </p>
        <p> Email: {datosFormulario.email} </p>
        <p> Password: {datosFormulario.password} </p>
        <p> Confirm password: {datosFormulario.confirmPassword} </p>
      </>
    )
  }
  
  export default DatosMostrados;