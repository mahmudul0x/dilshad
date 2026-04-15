import { ReactNode, createContext, useContext, useState } from "react";
import { MenuItem } from "@/data/menuData";
import { useUserProfile } from "@/contexts/UserProfileContext";
import { buildCartOrderMessage, getNumericPrice } from "@/lib/whatsapp";

export type CartItem = {
  item: MenuItem;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: MenuItem, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getWhatsAppMessage: (phoneNumber: string, deliveryAddress: string) => string;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { fullName } = useUserProfile();

  const addItem = (item: MenuItem, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.item.id === item.id);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        );
      }

      return [...prev, { item, quantity: qty }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((cartItem) => cartItem.item.id !== id));

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }

    setItems((prev) =>
      prev.map((cartItem) => (cartItem.item.id === id ? { ...cartItem, quantity: qty } : cartItem))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  const totalPrice = items.reduce(
    (sum, cartItem) => sum + getNumericPrice(cartItem.item.price) * cartItem.quantity,
    0
  );

  const getWhatsAppMessage = (phoneNumber: string, deliveryAddress: string) =>
    encodeURIComponent(
      buildCartOrderMessage(
        fullName,
        phoneNumber,
        deliveryAddress,
        items.map((cartItem) => ({
          name: cartItem.item.name,
          quantity: cartItem.quantity,
          price: cartItem.item.price,
        }))
      )
    );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, getWhatsAppMessage }}
    >
      {children}
    </CartContext.Provider>
  );
};
