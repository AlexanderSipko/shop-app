


function GoodList(props) {

    const {goods = []} = props
    return (
        <ul>
            {goods.map(good => 
                <GoodItems key={good.id} value={good}/>
                )}
        </ul>
    )
}

export default GoodList


function GoodItems(props) {

    const {id, name, description, price} = props.value
    return (
       <li key={id}>{name} -- {description} -- {price}</li>
    )
}
