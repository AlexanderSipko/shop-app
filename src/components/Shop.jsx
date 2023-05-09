
import {useEffect, useContext} from 'react'
import Preloader from './Preloads'
import GoodList from './GoodsList'
import { API_KEY, API_URL } from '../config'; 
import Cart from './Cart'
import BasketList from './BasketList'
import { ShopContext } from '../context';


function Shop(props) {

    const {value} = useContext(ShopContext);
    // const [goods, setGoods] = useState([]);
    // const {loading, setLoading} = useState(true);
    // const [order, setOrder] = useState([]);
    // const [isBasketShow, serIsBasketShow] = useState(false);

    useEffect(() => {
        value.setIsLoading()
        const headers = {
            Authorization:API_KEY
        }
        fetch(API_URL, {headers:headers})
          .then(response => response.json())
          .then((result) => 
                result.featured && value.setGoods(result.featured),
                value.setIsLoading()
            )
          .catch(error => console.log('error', error));
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const handleBasketShow = () => {
    //     // управление состоянием показа корзины
    //     serIsBasketShow(!isBasketShow)
    // } 

    // const headers = {
    //     Authorization:API_KEY
    // }

    // fetch(API_URL, {headers:headers})
    //   .then(response => response.json())
    //   .then((result) => 
    //     {
    //         result.featured && value.setGoods(result.featured);
    //     })
    //   .catch(error => console.log('error', error));

    // const addToBasket = (elem) => {
    //     const itemIndex = order.findIndex(orderItem => orderItem.id === elem.id)
    //     if (itemIndex < 0) {
    //         const newItem = {
    //             ...elem,
    //             quantity:1,
    //         }
    //         setOrder((order) => ([...order, newItem]))
    //     } else {
    //         const newOrder = order.map((orderItem, index) => {
    //             if (index === itemIndex) {
    //                 return {
    //                     ...orderItem,
    //                     quantity:orderItem.quantity+1
    //                 }
    //             } else {
    //                 return orderItem;
    //             }
    //         }
    //         )
    //         setOrder(newOrder)
    //     }
    // }

    // const removeFromBasket = (idElem) => {
    //     // убираем элемент из заказа
    //     const newOrders = order.filter(item => item.id !== idElem)
    //     setOrder(newOrders)
    // }

    // const changeQuantityFromBasket = (idElem, plus=true) => {
    //     // добавляем количество в заказе
    //     const newOrdersIndex = order.findIndex(item => item.id === idElem)

    //     if (newOrdersIndex<0) {
    //         return null
    //     } else {
    //         const NewOrderList = order.map((item, index) => {
    //             if (index === newOrdersIndex) {

    //                 let newQuantity = item.quantity
    //                 plus? newQuantity=newQuantity + 1: newQuantity=newQuantity - 1;

    //                 return {
    //                     ...item,
    //                     quantity:newQuantity
    //                 }
    //             } else {
    //                 return item
    //             }
    //         })
    //         setOrder(NewOrderList)
    //     }
    // }

    const {
        time
    } = props
    return (
        //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
        <main className="container content">
            <h3>Shop {time} {value.example}</h3>
                <div className='content'>
                    {value.isBasketShow && <BasketList 
                        // order={value.order}
                        // // setOrder={setOrder}
                        // handleBasketShow={value.handleBasketShow}
                        // removeFromBasket={value.removeFromBasket}
                        // changeQuantityFromBasket={value.changeQuantityFromBasket}
                    />}
                    {value.order? <Cart
                        // quantity={value.order.length}
                        // handleBasketShow={value.handleBasketShow}
                        /> : null}
                    
                    <h4 className="bg-primary text-white text-center p-2">
                    {value.loading? (
                        <GoodList
                            // goods={value.goods}
                            // add={value.addToBasket}
                        />
                    ):(
                        <Preloader/>
                    )}
                </h4>
            </div>
        </main>
    )
}

export default Shop