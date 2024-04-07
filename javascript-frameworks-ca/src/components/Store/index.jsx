import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addItemToCart: (item) =>
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem.id === item.id
          );

          if (existingItemIndex !== -1) {
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            updatedCartItems[existingItemIndex].totalPrice =
              updatedCartItems[existingItemIndex].quantity * item.price;
            return { cartItems: updatedCartItems };
          } else {
            return {
              cartItems: [
                ...state.cartItems,
                { ...item, quantity: 1, totalPrice: item.price },
              ],
            };
          }
        }),
      clearCart: () => set({ cartItems: [] }),
      removeItemFromCart: (index) =>
        set((state) => {
          const newCartItems = [...state.cartItems];
          newCartItems.splice(index, 1);
          return { cartItems: newCartItems };
        }),
      updateQuantity: (index, newQuantity) =>
        set((state) => {
          const updatedCartItems = [...state.cartItems];
          updatedCartItems[index].quantity = newQuantity;
          updatedCartItems[index].totalPrice =
            newQuantity * updatedCartItems[index].price;
          if (newQuantity === 0) {
            updatedCartItems.splice(index, 1);
          }
          return { cartItems: updatedCartItems };
        }),
    }),
    {
      name: "shopping-cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
