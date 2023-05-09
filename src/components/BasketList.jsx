
import { useContext } from 'react';
import BasketItem from './BasketItem'
import { ShopContext } from '../context'

function BasketList () {

    const {value} = useContext(ShopContext);
    // const [totalPrice, setTotalPrice] = useState(0)
    // const {order=[], handleBasketShow, removeFromBasket, changeQuantityFromBasket} = props

    const tPrice = value.order.reduce((totalPrice, item) => 
            {return totalPrice + item.quantity * item.price}, 0
        )

    return (
        <ul className="collection basket-list">
            <li className="collection-item active blue darken-3">
                Корзина value.order.length? `содержит: ${value.order.length} товаров`: null
                <span className="secondary-content">
                    <i className="material-icons" onClick={value.handleBasketShow}>close</i>
                </span>
            </li>
            { value.order.length? value.order.map(item => 
                <BasketItem
                    key={item.id}
                    item={item}
                    // removeFromBasket={value.removeFromBasket}
                    // changeQuantityFromBasket={value.changeQuantityFromBasket}
                />
            ): <li className="collection-item">Корзина пуста</li>}
            
            {value.order.length ?
            <>
                <span className="clearBasket waves-effect waves-light btn blue darken-3 pulse" >Оформить заказ</span>
            
                <li className="collection-item active blue darken-1">Общая стоимость: {tPrice} руб.</li>
                <span className="waves-effect waves-light btn-small grey darken-1" onClick={() => value.ClearOrder()}>Очистить корзину</span>
                </>:
                null
            }
        </ul>
    )
}


export default BasketList