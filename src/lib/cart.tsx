"use client";

import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { CartItem } from './types';
import { useToast } from "@/hooks/use-toast";

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id:string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_STATE'; payload: CartState };

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'UPDATE_QUANTITY': {
        const { id, quantity } = action.payload;
        if (quantity <= 0) {
            return { ...state, items: state.items.filter(item => item.id !== id) };
        }
        return { ...state, items: state.items.map(item => item.id === id ? { ...item, quantity } : item) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_STATE':
        return action.payload;
    default:
      return state;
  }
};

const getInitialState = (): CartState => {
    if (typeof window === 'undefined') {
      return { items: [] };
    }
    try {
      const storedCart = localStorage.getItem('massridesCart');
      return storedCart ? JSON.parse(storedCart) : { items: [] };
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return { items: [] };
    }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const { toast } = useToast();

  useEffect(() => {
    dispatch({ type: 'SET_STATE', payload: getInitialState() });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('massridesCart', JSON.stringify(state));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [state]);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } });
    toast({
        title: "Added to Cart",
        description: `${item.name} has been added to your cart.`,
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    toast({
        title: "Item Removed",
        description: "The item has been removed from your cart.",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{ state, dispatch, addItem, removeItem, updateQuantity, clearCart, getCartTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
