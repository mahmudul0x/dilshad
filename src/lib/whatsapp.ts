export const WHATSAPP_NUMBER = "8801911719476";
export const USER_FULL_NAME_KEY = "dilshad-user-full-name";

export const normalizeFullName = (name: string) => name.trim().replace(/\s+/g, " ");

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const getNumericPrice = (price: string) => {
  const match = price.match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
};

export const formatPrice = (amount: number) => `৳${amount.toFixed(2)}`;

export const buildQuickOrderMessage = (fullName: string) =>
  `আসসালামু আলাইকুম দিলশাদ ভান্ডার,\n\nআমি অর্ডার করতে চাই।\n\nকাস্টমারের নাম: ${fullName}\n\nদয়া করে আমার অর্ডার গ্রহণ করুন। ধন্যবাদ।`;

export const buildCartOrderMessage = (
  fullName: string,
  phoneNumber: string,
  deliveryAddress: string,
  items: Array<{ name: string; quantity: number; price: string }>
) => {
  const lines = items.map((item) => `• ${item.name} × ${item.quantity} (${item.price})`).join("\n");
  const total = items.reduce((sum, item) => sum + getNumericPrice(item.price) * item.quantity, 0);

  return `আসসালামু আলাইকুম দিলশাদ ভান্ডার,\n\nআমি একটি অর্ডার করতে চাই।\n\nকাস্টমারের নাম: ${fullName}\nফোন নম্বর: ${phoneNumber}\nডেলিভারি ঠিকানা: ${deliveryAddress}\n\nঅর্ডার আইটেমসমূহ:\n${lines}\n\nমোট মূল্য: ${formatPrice(total)}\n\nদয়া করে আমার অর্ডারটি কনফার্ম করুন। ধন্যবাদ।`;
};

export const buildCateringMessage = (
  fullName: string,
  form: { name: string; phone: string; guests: string; date: string; items: string; notes: string }
) =>
  `আসসালামু আলাইকুম দিলশাদ ভান্ডার,\n\nআমি ক্যাটারিং সম্পর্কে জানতে চাই।\n\nওয়েবসাইট ব্যবহারকারীর নাম: ${fullName}\nযোগাযোগের নাম: ${form.name}\nফোন: ${form.phone}\nঅতিথি সংখ্যা: ${form.guests}\nতারিখ: ${form.date}\nপছন্দের আইটেম: ${form.items}\nঅতিরিক্ত তথ্য: ${form.notes}`;
