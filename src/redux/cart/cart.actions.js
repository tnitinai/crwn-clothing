import CartActionTypes from './cart.types';

// action.js มีหน้าที่แสดงว่า ให้ Redux ทำอะไรบ้าง

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})