const RenderCond = ({x,y}) => { 
    return (
        <div>
            <p>{x > y && <p>{x} é maior que {y}</p>}</p>
            <p>{x > y ? <p>{x} é um numero Alto</p> : <p>{x} é um numero baixo</p>}</p>
            <p>O valor de Y é {y}</p>
        </div>
    )
}

export default RenderCond