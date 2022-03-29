export const initialState = {
    basket: [],
    user: null,
    shippingData: {}
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
    EMPTY_BASKET: "EMPTY_BASKET",
    SET_SHIPPINGDATA: "SET_SHIPPINGDATA"
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
        return{
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_ITEM":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
            );
        let newBasket = [...state.basket];
        if(index >= 0){
            newBasket.splice(index, 1);
        } 
        else {
            console.log(`no puede eliminarse el producto (id: ${action.id})!`);
        }
        return {
            ...state,
            basket: newBasket,
        };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: action.basket,
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
            case "SET_SHIPPINDATA":
                return {
                    ...state,
                    shippingData: action.shippingData,
                };
        default: 
        return state;
    }
}

export default reducer;