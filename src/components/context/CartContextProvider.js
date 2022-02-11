import React, {useReducer,createContext}from 'react';
const initialState = {
    selectedItems :[],
    total: 0,
    checkout: false,
    itemCounter:0
}
const sumItems = item => {
    const itemsCounter = item.reduce((total, product) => total + product.quantity, 0)
    const total = item.reduce((total, product) => total + product.price * product.quantity,0).toFixed(2)
    return {itemsCounter,total}
}
const cartReducer = (state,action) => {
    switch (action.type) {
      case "ADD_ITEM":
        if (!state.selectedItems.find((item) => item.id === item.payload.id)) {
          state.selectedItems.push({
            ...action.payload,
            quantity: 1,
          });
        }
        return {
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumItems(state.selectedItems),
          checkout: false,
        };
      case "REMOVE_ITEM":
        const newSelectedItems = state.selectedItems.find(
          (item) => item.id !== item.payload.id
        );
        return {
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumItems(newSelectedItems),
        };
      case "INCREASE":
        const indexI = state.selectedItems.findIndex(
          (item) => item.id === item.payload.id
        );
        state.selectedItems[indexI].quantity++;
        return {
          ...state,
          ...sumItems[state.selectedItems],
        };
      case "DECREASE":
        const indexD = state.selectedItems.findIndex(
          (item) => item.id === item.payload.id
        );
        state.selectedItems[indexD].quantity--;
        return {
          ...state,
          ...sumItems[state.selectedItems],
        };
      case "CHEAKOUT":
        return {
          selectedItems: [],
          total: 0,
          checkout: true,
          itemCounter: 0,
        };
      case "CLEAR":
        return {
          selectedItems: [],
          total: 0,
          checkout: false,
          itemCounter: 0,
            };
        default:
            return state
    }
}
export const CartContex = createContext()
const CartContextProvider = ({children}) => {
    const [State, dispatch] = useReducer(cartReducer,initialState) 
    return (
        <CartContex.Provider value={{State,dispatch}}>
           {children}
        </CartContex.Provider>
    );
};

export default CartContextProvider;