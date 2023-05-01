

function BasketItem (props) {

    const {item, removeFromBasket, changeQuantityFromBasket} = props

    return (
        <li key={item.id} className="collection-item">
            {item.quantity > 1? 
                <span className="btn btn-small waves-effect waves-light blue">
                    <i className="material-icons" onClick={() => changeQuantityFromBasket(item.id, false)}>exposure_neg_1</i>
                </span>:
                <span disabled={true} className="btn btn-small waves-effect waves-light blue">
                    <i className="material-icons">exposure_neg_1</i>
                </span>
            }

            <span className="btn btn-small waves-effect waves-light blue">
                <i className="material-icons" onClick={() => changeQuantityFromBasket(item.id)}>exposure_plus_1</i>
            </span>

            {item.name} (
                {item.quantity}
                
                 x {item.price}) = {item.quantity * item.price} руб.
            
            <span className="secondary-content blue-text" onClick={() => removeFromBasket(item.id)}>
                <i className="material-icons ">close</i></span>
        </li>
    )
}

export default BasketItem