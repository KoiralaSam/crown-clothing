import { createContext, useState } from "react";

export const DropdownContext = createContext({
  dropdown: false,
  cartItems: [],
  setDropdown: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  if (
    !cartItems.find((item) => {
      return item.id === productToAdd.id;
    })
  ) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    const newCart = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    return newCart;
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  if (existingItem) {
    if (existingItem.quantity === 1) {
      return cartItems.filter((item) => {
        return item.id !== productToRemove.id;
      });
    } else {
      return cartItems.map((item) => {
        return item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    }
  }
  return cartItems;
};

const removeAllItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const DropdownProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems(removeAllItemFromCart(cartItems, productToRemove));
  };

  const value = {
    dropdown,
    setDropdown,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    clearItemFromCart,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
