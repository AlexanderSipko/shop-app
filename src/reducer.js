

export function shopReducer (state, {type, payload}) {

    switch(type) {
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName:''
            }

        case 'SET_ALERT_NAME':
            return {
                ...state,
                alertName:payload
            }

        case 'SET_GOODS':
            return {
                ...state,
                goods:payload
            }

        case 'SET_IS_BASKET_SHOW':
            return {
                ...state,
                isBasketShow:!state.isBasketShow
            }

        case 'SET_IS_LOADING':
            return {
                ...state,
                loading:true
            }

        case 'ADD_TO_BASKET':
            return {
                ...state,
                order:payload
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order:payload
            }
        
        case 'CHANGE_QUANTITY_FROM_BASKET':
            return {
                ...state,
                order:payload
            }
        case 'CLEAR_ORDER':
            return {
                ...state,
                order:[]
            }

        default:
            return state
    }
}