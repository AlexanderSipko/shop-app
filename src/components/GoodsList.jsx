
import Alert from './Alert'
import { ShopContext } from '../context'
import { useContext } from 'react'

function GoodList() {
    const {value} = useContext(ShopContext);
    // const {goods = [], add, alertName, setAlertName} = props

    if (value.goods.lenght) {
        return <h3>Nothing here</h3>
    } else {
        return (
            <div className="goods">
                {value.goods.map(good => 
                    <GoodItems
                        key={good.id}
                        value={good}
                        // add={value.addToBasket}
                        // alertName={value.alertName}
                        // setAlertName={value.setAlert}
                        // closeAlert={closeAlert}
                    />
                )}
            </div>
        )
    }
   
}

export default GoodList


function GoodItems(props) {
    const {value} = useContext(ShopContext);

    const {id, name, description, price, full_background} = props.value
    // const {add} = props

    const addPosition = () => {
        value.addToBasket({id, name, description, price})
        value.setAlert(name)
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
                    {value.alertName && <Alert name={value.alertName}
                    // closeAlert={closeAlert}
                    />}
                    
                    <span className="right" style={{fontSize:'1.8rem'}} >{price} руб.</span>
                </div>
        </div>
    )
}
