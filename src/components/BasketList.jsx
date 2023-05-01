

import BasketItem from './BasketItem'

function BasketList (props) {

    // const [totalPrice, setTotalPrice] = useState(0)
    const {order=[], handleBasketShow, removeFromBasket, changeQuantityFromBasket, setOrder} = props

    const tPrice = order.reduce((totalPrice, item) => 
            {return totalPrice + item.quantity * item.price}, 0
        )

    return (
        <ul className="collection basket-list">
            <li className="collection-item active blue darken-3">
                Корзина {order.length? `содержит: ${order.length} товаров`: null}
                <span className="secondary-content">
                    <i class="material-icons" onClick={handleBasketShow}>close</i>
                </span>
            </li>
            { order.length? order.map(item => 
                <BasketItem key={item.id} item={item} removeFromBasket={removeFromBasket} changeQuantityFromBasket={changeQuantityFromBasket}/>
            ): <li className="collection-item">Корзина пуста</li>}
            
            {order.length ?
            <>
                <li className="collection-item active blue darken-1">Общая стоимость: {tPrice} руб.</li>
                <span className="clearBasket waves-effect waves-light btn blue darken-3" onClick={() => setOrder([])}>Очистить корзину</span>
            </>:
                null
            }
        </ul>
    )
}


export default BasketList