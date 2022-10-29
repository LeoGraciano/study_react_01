const List = () => {
    const items = [
        {
        id: 1,
        name:"Leonardo",
        },        {
        id: 2,
        name:"Jessica",
        },
        {
        id: 3,
        name:"Paulo",
        },
    ]

    return (
        <div>
            {
                items.map((item) => (
                    <p key={item.id}>{item.id} - {item.name}</p>
            ))
            }
        </div>
    )
}

export default List