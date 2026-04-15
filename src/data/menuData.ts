export type MenuItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
};

export const menuItems: MenuItem[] = [
  { id: "chicken-biryani", name: "চিকেন বিরিয়ানি", price: "৳400.00/ফুল · ৳200.00/হাফ", image: "https://dilshadvandar.com/products/1763638819.png", category: "লাঞ্চ এবং ডিনার", description: "সুগন্ধি বাসমতি চালে রান্না করা ঐতিহ্যবাহী চিকেন বিরিয়ানি। মশলার সুষম মিশ্রণে তৈরি, পরিবেশিত হয় সালাদ ও রায়তার সাথে।" },
  { id: "mutton-kacchi", name: "মাটন কাচ্চি বিরিয়ানি", price: "৳600.00/ফুল · ৳300.00/হাফ", image: "https://dilshadvandar.com/products/1763639782.png", category: "লাঞ্চ এবং ডিনার", description: "খাসির মাংসে তৈরি বিশেষ কাচ্চি বিরিয়ানি। ধীরে ধীরে রান্না করা নরম মাংস ও সুগন্ধি চালের অপূর্ব সমন্বয়।" },
  { id: "chicken-curry", name: "চিকেন কারি", price: "৳130.00/পিছ", image: "https://dilshadvandar.com/products/1763635527.png", category: "লাঞ্চ এবং ডিনার", description: "ঘরোয়া স্বাদের চিকেন কারি, মশলা ও ভেষজের সুষম মিশ্রণে তৈরি। ভাত বা রুটির সাথে পরিবেশনযোগ্য।" },
  { id: "chicken-masala", name: "চিকেন মাসালা", price: "৳150.00/প্লেট", image: "https://dilshadvandar.com/products/1763635609.png", category: "লাঞ্চ এবং ডিনার", description: "বিশেষ মাসালায় রান্না করা চিকেন, ঝাল-মিষ্টি স্বাদের এক অনন্য সমন্বয়।" },
  { id: "mutton-halim", name: "মাটন হালিম", price: "৳300.00/ফুল · ৳150.00/হাফ · ৳90.00/বাটি", image: "https://dilshadvandar.com/products/1763637925.png", category: "লাঞ্চ এবং ডিনার", description: "খাসির মাংস, ডাল ও মশলার মিশ্রণে তৈরি ঐতিহ্যবাহী হালিম। লেবু, পেঁয়াজ ও কাঁচা মরিচ দিয়ে পরিবেশিত।" },
  { id: "chicken-pizza", name: "চিকেন স্লাইচ পিজ্জা", price: "৳720.00/ফুল · ৳120.00/স্লাইচ", image: "https://dilshadvandar.com/products/1763635930.png", category: "ফাস্টফুড", description: "তাজা ডো-তে তৈরি চিকেন পিজ্জা, মোজারেলা চিজ ও বিশেষ সস সহ।" },
  { id: "chicken-burger", name: "চিকেন বার্গার", price: "৳100.00/পিছ", image: "https://dilshadvandar.com/products/1763637661.png", category: "ফাস্টফুড", description: "ক্রিস্পি চিকেন প্যাটি, তাজা সবজি ও বিশেষ সস দিয়ে তৈরি জুসি বার্গার।" },
  { id: "hotdog", name: "হটডগ", price: "৳70.00/পিছ", image: "https://dilshadvandar.com/products/1763636701.png", category: "ফাস্টফুড", description: "সফট বানে পরিবেশিত সুস্বাদু হটডগ, মাস্টার্ড ও কেচাপ সহ।" },
  { id: "butter-naan", name: "বাটার নান", price: "৳30.00/পিছ", image: "https://dilshadvandar.com/products/1763635738.png", category: "সকালের নাস্তা", description: "তন্দুরে সেঁকা নরম বাটার নান, মাখন দিয়ে পরিবেশিত।" },
  { id: "paratha", name: "পরাটা", price: "৳20.00/পিছ", image: "https://dilshadvandar.com/products/1763637114.png", category: "সকালের নাস্তা", description: "তেলে ভাজা খাস্তা পরাটা, সকালের নাস্তায় ডাল বা ভর্তার সাথে উপযুক্ত।" },
  { id: "rajbhog", name: "রাজভোগ", price: "৳550.00/কেজি · ৳40.00/পিছ", image: "https://dilshadvandar.com/products/1763638194.png", category: "দধি ও মিষ্টান্ন", description: "ছানার তৈরি ঐতিহ্যবাহী রাজভোগ, চিনির সিরায় ডোবানো মিষ্টি।" },
  { id: "plain-yogurt", name: "সাদা দই", price: "৳360.00/কেজি · ৳40.00/কাপ", image: "https://dilshadvandar.com/products/1763636539.png", category: "দধি ও মিষ্টান্ন", description: "ঘরে তৈরি ঘন সাদা দই, খাঁটি দুধ থেকে তৈরি।" },
];

export const categories = ["সব", "লাঞ্চ এবং ডিনার", "ফাস্টফুড", "সকালের নাস্তা", "দধি ও মিষ্টান্ন"];

export const galleryImages = menuItems.map(item => ({
  src: item.image,
  alt: item.name,
  caption: item.name,
}));
