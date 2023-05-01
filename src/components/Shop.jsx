
import {useState, useEffect} from 'react'
import Preloader from './Preloads'
import GoodList from './GoodsList'
import { API_KEY, API_URL } from '../config'; 
import Cart from './Cart'
import BasketList from './BasketList'

function Shop(props) {

    const [goods, setGoods] = useState([]);
    const {loading, setLoading} = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, serIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('')

    useEffect(() => {

        const headers = {
            Authorization:API_KEY
        }
        fetch(API_URL, {headers:headers})
          .then(response => response.json())
          .then((result) => 
            {
                result.featured && setGoods(result.featured);
            })
          .catch(error => console.log('error', error));
            
    }, [setLoading])


    const handleBasketShow = () => {
        // управление состоянием показа корзины
        serIsBasketShow(!isBasketShow)
    } 

    const headers = {
        Authorization:API_KEY
    }
    fetch(API_URL, {headers:headers})
      .then(response => response.json())
      .then((result) => 
        {
            result.featured && setGoods(result.featured);
        })
      .catch(error => console.log('error', error));

    const addToBasket = (elem) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === elem.id)

        if (itemIndex < 0) {
            const newItem = {
                ...elem,
                quantity:1,
            }
            setOrder((order) => ([...order, newItem]))
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity:orderItem.quantity+1
                    }
                } else {
                    return orderItem;
                }
            }
            )
            setOrder(newOrder)
        }
    }

    const removeFromBasket = (idElem) => {
        // убираем улемент из заказа
        const newOrders = order.filter(item => item.id !== idElem)
        setOrder(newOrders)
    }

    const changeQuantityFromBasket = (idElem, plus=true) => {
        // добавляем количество в заказе
        const newOrdersIndex = order.findIndex(item => item.id === idElem)

        if (newOrdersIndex<0) {
            return null
        } else {
            const NewOrderList = order.map((item, index) => {
                if (index === newOrdersIndex) {

                    let newQuantity = item.quantity
                    plus? newQuantity=newQuantity + 1: newQuantity=newQuantity - 1;

                    return {
                        ...item,
                        quantity:newQuantity
                    }
                } else {
                    return item
                }
            })
            setOrder(NewOrderList)
        }
        // let changeOrderItem = newOrders[0]
        // changeOrderItem.quantity += 1
        // console.log([
        //     ...order,
        //     changeOrderItem
        // ]) 
    }

    const  closeAlert = () => {
        setAlertName('')
    } 

    const {
        time
    } = props
    return (
        <main className="container content">
            <h3>Shop {time}</h3>
                <div className='content'>
                    {isBasketShow && <BasketList 
                        order={order}
                        setOrder={setOrder}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        changeQuantityFromBasket={changeQuantityFromBasket}
                    />}
                    {order? <Cart quantity={order.length} handleBasketShow={handleBasketShow}/> : null}
                    
                    <h4 className="bg-primary text-white text-center p-2">
                    {!loading? (
                        <GoodList
                            goods={goods}
                            add={addToBasket}
                            alertName={alertName}
                            setAlertName={setAlertName}
                            closeAlert={closeAlert}/>
                    ):(
                        <Preloader/>
                    )}
                </h4>
            </div>
        </main>
        
    )
}

export default Shop