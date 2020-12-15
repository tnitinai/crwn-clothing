import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

// Reducer เปรียบเสมือนกับ Controller คือ ให้เอา state ที่มาจาก action (payload) ว่าจะให้ทำอะไรกับ props ของ redux

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = ( state = INITIAL_STATE, action) => {

  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, //ยังคงเอา props ทุกตัวใน state มาเหมือนเดิม
        hidden: !state.hidden //แต่ invert ค่า hidden
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
        /*
        cartItems: [
          ...state.cartItems, //เอา cartItems ที่เกิดขึ้นก่อนมาใส่ใน cartItems (state.cartItems: state คือ syntax ที่เป็น global ของ Redux)
          action.payload //append new item to existing cartItems from payload (payload: คือ action หลังจาก user add new item to cart)
        ]
        */
      }

    default:
      return state;

  }
}

export default cartReducer;