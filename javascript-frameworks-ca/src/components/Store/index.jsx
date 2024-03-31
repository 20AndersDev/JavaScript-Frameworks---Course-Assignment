// store.js
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
            // If item already exists in cart, update quantity
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[existingItemIndex].quantity++;
            return { cartItems: updatedCartItems };
          } else {
            // If item is not in cart, add it
            return {
              cartItems: [...state.cartItems, { ...item, quantity: 1 }],
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
    }),
    {
      name: "shopping-cart-storage", // Name for the persisted state
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);

export default useStore;
