
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

    const {
        time
    } = props
    return (
        <main className="container content">
            <h3>Shop {time}</h3>
                <div className='content'>
                    {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>}
                    {order? <Cart quantity={order.length} handleBasketShow={handleBasketShow}/> : null}
                    
                    <h4 className="bg-primary text-white text-center p-2">
                    {!loading? (
                        <GoodList goods={goods} add={addToBasket}/>
                    ):(
                        <Preloader/>
                    )}
                </h4>
            </div>
        </main>
        
    )
}

export default Shop