import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle, MapPin, Phone } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, getNumericPrice } from "@/lib/whatsapp";

const CartSheet = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart, getWhatsAppMessage } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
    setPhoneError("");
    setAddressError("");
  };

  const handleOrderSubmit = () => {
    const trimmedPhone = phoneNumber.trim();
    const trimmedAddress = deliveryAddress.trim();

    if (!trimmedPhone) {
      setPhoneError("অর্ডার পাঠানোর আগে আপনার ফোন নম্বর লিখতে হবে।");
      return;
    }

    if (!trimmedAddress) {
      setPhoneError("");
      setAddressError("অর্ডার পাঠানোর আগে আপনার ঠিকানা লিখতে হবে।");
      return;
    }

    setPhoneError("");
    setAddressError("");
    window.open(`https://wa.me/8801911719476?text=${getWhatsAppMessage(trimmedPhone, trimmedAddress)}`, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative rounded-lg p-2 transition-colors hover:bg-secondary" aria-label="কার্ট">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 ? (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
              {totalItems}
            </span>
          ) : null}
        </button>
      </SheetTrigger>
      <SheetContent className="flex h-full w-full flex-col overflow-y-auto px-4 py-4 sm:max-w-md">
        <SheetHeader className="pb-2">
          <SheetTitle className="font-heading text-lg">আপনার কার্ট ({totalItems})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center text-muted-foreground">
              <ShoppingCart className="mx-auto mb-3 h-12 w-12 opacity-30" />
              <p>কার্ট খালি আছে</p>
              <p className="mt-1 text-sm">মেনু থেকে আইটেম যোগ করুন</p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-2 py-2">
              {items.map((cartItem) => {
                const itemTotal = getNumericPrice(cartItem.item.price) * cartItem.quantity;

                return (
                  <div key={cartItem.item.id} className="flex gap-2 rounded-lg bg-muted p-2.5">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="h-14 w-14 flex-shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2">
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-foreground">{cartItem.item.name}</h4>
                          <p className="mt-0.5 text-[11px] font-bold text-primary">{cartItem.item.price}</p>
                          <p className="mt-0.5 text-[11px] font-medium text-foreground">মোট: {formatPrice(itemTotal)}</p>
                        </div>
                        <button
                          onClick={() => removeItem(cartItem.item.id)}
                          className="rounded p-1 text-destructive transition-colors hover:bg-destructive/10"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                          className="rounded bg-background p-1 transition-colors hover:bg-secondary"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold">{cartItem.quantity}</span>
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                          className="rounded bg-background p-1 transition-colors hover:bg-secondary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-3 border-t border-border pt-3">
              <div className="rounded-lg bg-muted/60 p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>মোট আইটেম</span>
                  <span>{totalItems}</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-sm font-bold text-foreground">
                  <span>সর্বমোট দাম</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>

              {isCheckoutOpen ? (
                <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-3">
                  <div className="space-y-1.5">
                    <label htmlFor="cart-phone-number" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      ফোন নম্বর
                    </label>
                    <input
                      id="cart-phone-number"
                      type="tel"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      placeholder="আপনার ফোন নম্বর লিখুন"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {phoneError ? <p className="text-xs text-destructive">{phoneError}</p> : null}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="delivery-address" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      ডেলিভারি ঠিকানা
                    </label>
                    <textarea
                      id="delivery-address"
                      value={deliveryAddress}
                      onChange={(event) => setDeliveryAddress(event.target.value)}
                      rows={2}
                      placeholder="আপনার পূর্ণ ঠিকানা লিখুন"
                      className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {addressError ? <p className="text-xs text-destructive">{addressError}</p> : null}
                  </div>

                  <button
                    type="button"
                    onClick={handleOrderSubmit}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp এ অর্ডার পাঠান
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleOpenCheckout}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Place Order
                </button>
              )}

              <button
                onClick={clearCart}
                className="w-full py-1.5 text-sm text-muted-foreground transition-colors hover:text-destructive"
              >
                কার্ট খালি করুন
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
