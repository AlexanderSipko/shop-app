import { useContext } from "react"
import { ShopContext } from "../context"

function Cart() {
    const {value} = useContext(ShopContext);

    // const {quantity=0, handleBasketShow} = props

    return (
        <div className="cart blue darken-1 white-text" onClick={value.handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {value.order.length? <span className="cart--quantity">{value.order.length}</span>:null}
        </div>
    )
} 

export default Cart