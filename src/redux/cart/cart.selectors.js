import { createSelector } from 'reselect';


//input selector
const selectCart = state => state.cart;

//createSelector(first, second) : เพื่อเอา first argu มาจัดเรียงตาม syntax ของ selector 
//where first: collection | array, 
//second: fn
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems //แปลได้ว่า เอา attributes ของ selectCart (ซึ่งคือ state.cart) แต่ละตัว มาจัดเรียง เพื่อทำให้เป็น memoization
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(( //reduce syntax array.reduce((accum, each) => callbackfn(accum + each), initial_value)
      accumulativeQuantity, cartItem) => (
        accumulativeQuantity + cartItem.quantity), 
    0)
      
)