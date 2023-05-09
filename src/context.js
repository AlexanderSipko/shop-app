import { createContext, useReducer } from "react";
import {shopReducer} from './reducer'

export const ShopContext = createContext();
const initialState = {
    goods:[],
    order:[],
    alertName:'',
    isBasketShow:false,
    loading:false,
    example:'hello context dispatch'
}

export function ContextProvider({children}) {

    const [value, dispatch] = useReducer(shopReducer, initialState)

    value.closeAlert = () => {
        dispatch({type:'CLOSE_ALERT'})
    }

    value.setAlert = (name) => {
        dispatch({type:'SET_ALERT_NAME', payload:name})
    }

    value.setGoods = (newGoods) => {
        dispatch({type:'SET_GOODS', payload:newGoods})
    }

    value.handleBasketShow = () => {
        dispatch({type:'SET_IS_BASKET_SHOW'})
    }

    value.setIsLoading = () => {
        dispatch({type:'SET_IS_LOADING'})
    }

    value.addToBasket = (elem) => {
        const itemIndex = value.order.findIndex(orderItem => orderItem.id === elem.id)
        if (itemIndex < 0) {
            const newItem = {
                ...elem,
                quantity:1,
            }
            dispatch({type:'ADD_TO_BASKET', payload:[...value.order, newItem]})
        } else {
            const newOrder = value.order.map((orderItem, index) => {
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
            dispatch({type:'ADD_TO_BASKET', payload:newOrder})
        }
    }

    value.changeQuantityFromBasket = (idElem, plus=true) => {
        // добавляем количество в заказе
        const newOrdersIndex = value.order.findIndex(item => item.id === idElem)

        if (newOrdersIndex<0) {
            return null
        } else {
            const NewOrderList = value.order.map((item, index) => {
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
            // setOrder(NewOrderList)
            dispatch({type:'CHANGE_QUANTITY_FROM_BASKET', payload:NewOrderList})
        }
    }

    value.removeFromBasket = (elem) => {
        const newOrders = value.order.filter(item => item.id !== elem)
        // setOrder(newOrders)
        dispatch({type:'REMOVE_FROM_BASKET', payload:newOrders})
    }

    value.ClearOrder = () => {
        dispatch({type:'CLEAR_ORDER'})
    }

    return (
        <ShopContext.Provider value={{value}}>
            {children}
        </ShopContext.Provider>
    )
}