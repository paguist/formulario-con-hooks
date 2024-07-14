const Formulario = ({ datosFormulario, setDatosFormulario }) => {

    const actualizarCampo = (e) => {
      const { name, value } = e.target;
      setDatosFormulario({
        ...datosFormulario,
        [name]: value
      })
    }
  
    return (
      <>
        <form>
  
          <div>
            <label htmlFor="firstName"> First name </label>
            <input type="text" id="firstName" name="firstName" value={datosFormulario.firstName} onChange={actualizarCampo} />
          </div><br />
  
          <div>
            <label htmlFor="lastName"> Last name </label>
            <input type="text" id="lastName" name="lastName" value={datosFormulario.lastName} onChange={actualizarCampo} />
          </div><br />
  
          <div>
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" name="email" value={datosFormulario.email} onChange={actualizarCampo} />
          </div><br />
  
          <div>
            <label htmlFor="password"> Password </label>
            <input type="password" id="password" name="password" value={datosFormulario.password} onChange={actualizarCampo} />
          </div><br />
  
          <div>
            <label htmlFor="confirmPassword"> Confirm password </label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={datosFormulario.confirmPassword} onChange={actualizarCampo} />
          </div>
  
        </form>
  
      </>
    )
  }
  
  export default Formulario;