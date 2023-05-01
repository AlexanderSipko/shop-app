


function GoodList(props) {

    const {goods = [], add} = props

    if (goods.lenght) {
        return <h3>Nothing here</h3>
    } else {
        return (
            <div className="goods">
                {goods.map(good => 
                    <GoodItems key={good.id} value={good} add={add}/>
                )}
            </div>
        )
    }
   
}

export default GoodList


function GoodItems(props) {

    const {id, name, description, price, full_background} = props.value
    const {add} = props

    const addPosition = () => {
        add({id, name, description, price})
    }

    return (
        <div className="card" id={id}>
                <div className="card-img">
                    <img width="100%" src={full_background} alt={name} />
                </div>
                <div className="card-content">
                    <p>
                        {description}
                    </p> 
                </div>
                <div className="card-action">
                    
                    <button className="btn blue" onClick={addPosition}>Купить</button>
                    <span className="right" style={{fontSize:'1.8rem'}} >{price} руб.</span>
                </div>
        </div>
    )
}
