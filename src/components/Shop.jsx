
import {useState, useEffect} from 'react'
import Preloader from './Preloads'
import GoodList from './GoodsList'
import { API_KEY, API_URL } from '../config'; 

function Shop(props) {

    const [goods, setGoods] = useState([])
    const {loading, setLoading} = useState(true)

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

    const {
        user:userName,
        time
    } = props
    return (
        <main className="container content">
            <h3>Shop information {time}</h3>
                <div className='content'>
                    <h3>Hello { userName }</h3>
                    <h4 className="bg-primary text-white text-center p-2">
                    {!loading? (
                        <GoodList goods={goods}/>
                    ):(
                        <Preloader/>
                    )}
                </h4>
            </div>
        </main>
        
    )
}

export default Shop