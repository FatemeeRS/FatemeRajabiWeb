

const CartReducer = (state,action) => {
    console.log("ac",action, state)
    switch (action.type){
        case"ADD_TO_CARD":
        return {
            ...state,
            carts:[
                ...state.carts,
                action.id
            ]
        }
        case "REMOVE_FROM_CARD":
            let newCarts = state.carts
            newCarts.splice(state.carts.findIndex((cartId)=> cartId === action.id),1)
            return {
                ...state,
                carts: newCarts
            }
        default:
     }
}

export default CartReducer