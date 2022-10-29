function FirstComponent() {
  const name = "Leonardo"

  return (
    <div className="FirstComponent">
      <p>Primeiro componente</p>
      {/* <label htmlFor="name">Nome:</label>
      <input type="text" name="name"/> */}
      {/* Comentário não passar para frontend como o html*/}
      {2 + 2}
      
      {console.log('Qualquer Coisa')}
      <p>None: {name}</p>
    </div>
  )
}

export default FirstComponent
