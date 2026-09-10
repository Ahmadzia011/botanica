export type StoreCard = { name: string; price: string; subtitle: string; description: string; image: string };

export type StoreReview = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export type StoreFaq = { question: string; answer: string };

export const COLLECTION_STATS = [
  { label: "Botanicals", value: "100% whole plant" },
  { label: "Blended in", value: "Small batches" },
  { label: "Dispatch", value: "Within 48 hours" },
];

export const LAMP_FEATURES = [
  {
    title: "Plants with a point of view",
    description: "Every blend begins with whole leaves, flowers and roots chosen for their aroma and character.",
  },
  {
    title: "Nothing unnecessary",
    description: "No flavour dust, fillers or shortcuts—just ingredients you can recognise in the cup.",
  },
  {
    title: "A ritual worth keeping",
    description: "Blended in small, fragrant runs and packed fresh for the unhurried parts of your day.",
  },
];

export const LAMP_COLLECTION: StoreCard[] = [
  {
    name: "Still / Lemon Balm",
    price: "$28",
    subtitle: "Unwind",
    description: "A bright, herbaceous evening infusion with lemon balm and tulsi.",
    image: "/botanica/herbal-calm.png",
  },
  {
    name: "Daybreak / Chamomile",
    price: "$26",
    subtitle: "Ease",
    description: "Soft floral notes and gentle warmth for a slower morning.",
    image: "/botanica/herbal-bright.png",
  },
  {
    name: "Ground / Rosemary",
    price: "$30",
    subtitle: "Focus",
    description: "A deeply aromatic botanical concentrate for clear, grounded moments.",
    image: "/botanica/herbal-rest.png",
  },
];

export const SHOP_COLLECTION: StoreCard[] = [
  ...LAMP_COLLECTION,
  {
    name: "The Evening Set",
    price: "$72",
    subtitle: "Giftable",
    description: "Three considered blends for the end of a full day.",
    image: "/botanica/herbal-ritual.png",
  },
  {
    name: "Bloom / Hibiscus",
    price: "$27",
    subtitle: "Brighten",
    description: "A tart, jewel-toned infusion of hibiscus, rosehip, and soft spice.",
    image: "/botanica/herbal-vitality.png",
  },
  {
    name: "Settle / Fennel",
    price: "$25",
    subtitle: "Restore",
    description: "Fennel, mint, and citrus peel for a fresh, clear finish to a meal.",
    image: "/botanica/herbal-digest.png",
  },
  {
    name: "Dusk / Lavender",
    price: "$29",
    subtitle: "Nightfall",
    description: "A soft floral blend made for dim rooms and slower evenings.",
    image: "/botanica/herbal-night.png",
  },
];

export const STORE_REVIEWS: StoreReview[] = [
  {
    quote: "It tastes like someone took time with it. My evening cup has become a little boundary between work and home.",
    name: "Jon Bell",
    role: "Architect",
    image: "/botanica/hero-man-01.png",
  },
  {
    quote: "The aroma alone slows the room down. It is the most intentional thing in my pantry.",
    name: "David Shah",
    role: "Founder",
    image: "/botanica/hero-man-02.png",
  },
  {
    quote: "Beautiful without being precious—the leaves are generous, fragrant, and genuinely good.",
    name: "Marcus Reed",
    role: "Ceramicist",
    image: "/botanica/hero-man-03.png",
  },
];

export const STORE_FAQS: StoreFaq[] = [
  {
    question: "How many cups are in a tin?",
    answer: "Each tin makes approximately 20 generous cups, depending on how boldly you brew.",
  },
  {
    question: "Are the blends caffeine free?",
    answer: "Our herbal infusions are naturally caffeine free. Each product page lists every ingredient clearly.",
  },
  {
    question: "When will my order arrive?",
    answer: "Orders leave our studio within 48 hours and are packed carefully to preserve freshness.",
  },
  {
    question: "Where do the ingredients come from?",
    answer: "We work with trusted small farms and ingredient partners, following each harvest from field to blend.",
  },
];
