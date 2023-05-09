
import {useEffect, useContext} from 'react'
import Preloader from './Preloads'
import GoodList from './GoodsList'
import { API_KEY, API_URL } from '../config'; 
import Cart from './Cart'
import BasketList from './BasketList'
import { ShopContext } from '../context';

function Shop(props) {

    const {value} = useContext(ShopContext);

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

    const {
        time
    } = props
    return (
        //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
        <main className="container content">
            <h3>Shop {time} {value.example}</h3>
                <div className='content'>
                    {value.isBasketShow && <BasketList 
                    />}
                    {value.order? <Cart
                        /> : null}
                    
                    <h4 className="bg-primary text-white text-center p-2">
                    {value.loading? (
                        <GoodList
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