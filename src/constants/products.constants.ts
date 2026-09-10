export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Still Lemon Balm",
    price: 28,
    desc: "Whole-leaf lemon balm and tulsi for a softer evening ritual.",
  },
  {
    id: 2,
    name: "Daybreak Chamomile",
    price: 26,
    desc: "A gentle floral infusion for quiet, unhurried mornings.",
  },
  {
    id: 3,
    name: "Ground Rosemary",
    price: 30,
    desc: "A fragrant rosemary botanical concentrate for clear moments.",
  },
];


export const PLANS: Product[] = [
  {
    id: 1,
    name: "Basic",
    price: 50,
    desc: "A monthly delivery of whole-plant blends, selected with the season.",
  },
  {
    id: 2,
    name: "Pro",
    price: 150,
    desc:
      "A curated rotation of fresh seasonal botanicals delivered each month.",
  },
  {
    id: 3,
    name: "Max",
    price: 250,
    desc: "Our fullest seasonal ritual, including limited-run pantry editions.",
  },
];

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const SUCCESS_PAGE = "http://localhost:3000/success"
export const CANCELLATION_PAGE = "http://localhost:3000/cancel"
