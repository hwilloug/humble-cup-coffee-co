export const IMAGE_URL = "https://humblecupimages.poppyland.dev";

export const SEASONAL_MENU = [
  {
    name: "Classic Cappuccino",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213",
  },
  {
    name: "Iced Caramel Latte",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    name: "Mocha Supreme",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d",
  },
];

export const MENU_ITEMS: {
  section: string;
  subtitle?: string;
  items: {
    name: string;
    smOz?: number;
    smPrice?: number;
    lgOz?: number;
    lgPrice?: number;
    smIcedPrice?: number;
    smIcedOz?: number;
    lgIcedPrice?: number;
    lgIcedOz?: number;
    description?: string;
  }[];
}[] = [
  {
    section: "Coffee & Espresso",
    subtitle: "All coffee drinks made with locally roasted beans",
    items: [
      {
        name: "Coffee",
        smOz: 12,
        smPrice: 3,
        lgOz: 16,
        lgPrice: 3.5,
        description: "Choose from our daily selection of drip coffee",
      },
      {
        name: "French Press",
        smOz: 12,
        smPrice: 4.5,
        description: "Choose from our full selection of coffee beans",
      },
      {
        name: "Espresso",
        smOz: 4,
        smPrice: 3,
      },
      {
        name: "Americano",
        smOz: 12,
        smPrice: 3,
        lgOz: 16,
        lgPrice: 4,
        smIcedOz: 16,
        smIcedPrice: 3.5,
        lgIcedOz: 24,
        lgIcedPrice: 4.5,
        description: "Espresso and hot water",
      },
      {
        name: "Cortado",
        smOz: 4,
        smPrice: 4,
        description: "Equal parts espresso and steamed milk",
      },
      {
        name: "Cappuccino",
        smOz: 12,
        smPrice: 4.5,
        description: "Espresso and steamed milk with a layer of foam",
      },
      {
        name: "Latte",
        smOz: 12,
        smPrice: 5,
        lgOz: 16,
        lgPrice: 5.5,
        smIcedPrice: 5,
        smIcedOz: 16,
        lgIcedPrice: 6,
        lgIcedOz: 24,
        description: "Espresso and steamed milk",
      },
      {
        name: "Cold Brew",
        smIcedOz: 16,
        smIcedPrice: 4.5,
        lgIcedOz: 24,
        lgIcedPrice: 6,
      },
      {
        name: "Affagato",
        smPrice: 6,
        smOz: 2,
        description: "Espresso over gelato",
      },
    ],
  },
  {
    section: "Tea & Other",
    subtitle: "All tea drinks made with locally sourced tea",
    items: [
      {
        name: "Matcha",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Green tea powder and steamed milk",
      },
      {
        name: "Loose Leaf Tea",
        smPrice: 4,
        smOz: 12,
        lgPrice: 4.5,
        lgOz: 16,
        smIcedPrice: 4.5,
        smIcedOz: 16,
        lgIcedPrice: 5,
        lgIcedOz: 24,
        description: "Choose from our full selection of loose leaf tea",
      },
      {
        name: "Chai Latte",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Spiced tea and steamed milk",
      },
      {
        name: "London Fog",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Black tea and steamed milk",
      },
      {
        name: "Cardamom Rose Latte",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Black tea and rose and cardamom",
      },
      {
        name: "Hot Chocolate",
        smPrice: 3.5,
        smOz: 12,
        lgPrice: 4,
        lgOz: 16,
        description: "Hot chocolate with whipped cream",
      },
    ],
  },
  {
    section: "Specialty Drinks",
    subtitle: "All specialty drinks are made with locally sourced ingredients",
    items: [
      {
        name: "Humble Bear Latte",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Espresso and steamed milk with honey, etc",
      },
      {
        name: "Cinnamon Bun Latte",
        smPrice: 5,
        smOz: 12,
        lgPrice: 6,
        lgOz: 16,
        smIcedPrice: 5.5,
        smIcedOz: 16,
        lgIcedPrice: 6.5,
        lgIcedOz: 24,
        description: "Espresso and steamed milk with honey, etc",
      },
    ],
  },
];

export const HOUSE_MADE_FLAVORS = ["Brown Sugar Rosemary", "Vanilla Sage"];

export const FLAVORS = [
  "Vanilla",
  "Caramel",
  "Hazelnut",
  "Lavendar",
  "Sugar Free Vanilla",
  "Local Honey",
  "Dark Mocha",
  "White Mocha",
];

export const MILK_OPTIONS = ["Whole", "1%", "Almond", "Oat"];

export const FOOD_MENU = [
  {
    section: "Pastries & Snacks",
    subtitle: "All pastries and snacks are made in house",
    items: [
      {
        name: "Select Pastries",
        description: "Choose from our daily selection of pastries",
        price: "$5.00 - $6.00",
      },
      {
        name: "Gluten Free Options",
        description: "Choose from our daily selection of gluten free pastries",
        price: "$5.00 - $6.00",
      },
    ],
  },
  {
    section: "Lunch",
    items: [
      {
        name: "Chicken Cesar Wrap",
        description: "Chicken, lettuce, tomato, and croutons",
        price: "$10.00",
      },
      {
        name: "Salad",
        description: "Mixed greens, tomato, cucumber, and croutons",
        price: "$10.00",
      },
    ],
  },
  {
    section: "Desserts",
    items: [
      {
        name: "Empanadaria Bakery Box",
        description: "12 empanadas, 12 cookies, 12 muffins, 12 cupcakes",
        price: "$10.00",
      },
    ],
  },
];

export const SCALLOPED_EDGE_URL =
  "https://humble-cup-images.s3.us-east-1.amazonaws.com/scalloped_edge.png";
export const SCALLOPED_EDGE_BLUE_URL =
  "https://humble-cup-images.s3.us-east-1.amazonaws.com/scalloped-edge-blue.png";
