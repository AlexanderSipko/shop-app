

function BasketItem (props) {

    const {item} = props

    return (
        <li key={item.id} className="collection-item">
            {item.name} ({item.quantity} x {item.price}) = {item.quantity * item.price} руб.
            <span className="secondary-content">
                <i class="material-icons">close</i></span>
        </li>
    )
}

export default BasketItem