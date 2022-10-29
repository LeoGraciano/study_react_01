
const AnotherComponent = () => {

  const handleClick = () => {
    console.log('clicked')
  };

  return (
    <div >
      <p>segundo componente</p>
      <button onClick={handleClick}>Evento de click</button>
      <hr />
      <button onClick={() => console.log('teste')}>Test</button>
    </div>
  )
}

export default AnotherComponent;
