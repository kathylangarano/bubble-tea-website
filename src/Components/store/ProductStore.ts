import create from 'zustand';

interface Product {
  image: string;
  title: string;
  description: string;
  priceLarge?: string;
  priceMedium?: string;
  price?: string;
}

interface ProductsState {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: () => Product[];
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [
    { id: 1, title: "Bubble jamaica tea", description: "Té Frutal", image: "../../assets/images/bubble jamaica tea.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 2, title: "Bubble tea de fresa", description: "Té Frutal", image: "../../assets/images/bubble tea fresa.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 3, title: "Bubble tea de mango", description: "Té Frutal", image: "../../assets/images/bubble tea mango.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 4, title: " Iced Bubble Tea", description: "Té Frutal", image: "../../assets/images/ice bubble tea.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 5, title: "Bubble tea de mora", description: "Té Frutal", image: "../../assets/images/mora.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 6, title: "Bubble tea de manzana", description: "Té Frutal", image: "../../assets/images/manzana.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 7, title: " Bubble tea de maracuyá", description: "Té Frutal", image: "../../assets/images/no products.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 8, title: "Bubble tea de piña" , description: "Té Frutal", image: "../../assets/images/no products.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 9, title: "Chia bubble tea", description: "Té Frutal", image: "../../assets/images/no products.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 10, title: "Pop pop Tea", description: "Té Frutal", image: "../../assets/images/no products.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 11, title: "Bubble Tea", description: "Bubble Tea", image: "../../assets/images/bubble tea.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 12, title: "Guru bubble coffee", description: "Bubble Tea", image: "../../assets/images/guru bubble coffee.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 13, title: "Matcha Bubble Tea", description: "Bubble Tea", image: "../../assets/images/matcha bubble.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 14, title: "Matchalatte", description: "Bubble Tea", image: "../../assets/images/matchalatte.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 15, title: "Panela Bubble Tea", description: "Bubble Tea", image: "../../assets/images/panela bubble tea.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 16, title: "Taro Bubble Tea", description: "Bubble Tea", image: "../../assets/images/taro bubble tea.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 17, title: "Bubble flan", description: "Bubble Tea", image: "../../assets/images/no products.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 18, title: "Jelly Bubble", description: "Bubble Tea", image: "../../assets/images/no products.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 19, title: "Pop pop Bubble Tea" , description: "Bubble Tea", image: "../../assets/images/no products.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 20, title: "Oreo Bubble Tea", description: "Bubble Tea", image: "../../assets/images/oreo.jpeg" , priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 21, title: "Guru Tea", description: "Bubble Tea", image: "../../assets/images/no products.jpeg", priceLarge: "$4.75", priceMedium:"$3.75"},
    { id: 22, title: "Frape de taro" , description: "Frapé", image: "../../assets/images/frape de taro.jpeg" , priceLarge: "$0" , priceMedium:"$0" },
    { id: 23, title: "Frape de fresa", description: "Frapé", image: "../../assets/images/frape fresa.jpeg" , priceLarge: "$0" , priceMedium:"$0" },
    { id: 24, title: "Frape de frutos rojos", description: "Frapé", image: "../../assets/images/frape frutos rojos.jpeg", priceLarge: "$0" , priceMedium:"$0" },
    { id: 25, title: "Frape de piña", description: "Frapé", image: "../../assets/images/frape piña.jpeg" , priceLarge: "$0" , priceMedium:"$0" },
    { id: 26, title: "Ice cream", description: "Postres", image: "../../assets/images/ice cream.jpeg" , price: "$0"  },
    { id: 27, title: "Candy milk", description: "Postres", image: "../../assets/images/candy milk.jpeg" , price: "$0"  },
    { id: 28, title: "Guru Cake", description: "Postres", image: "../../assets/images/guru cake.jpeg" , price: "$0" },
    { id: 29, title: "Pastel de luna", description: "Postres", image: "../../assets/images/pastel luna.jpeg" , price: "$2.99" },
    { id: 30, title: "Pastel de piña" , description: "Postres", image: "../../assets/images/pastel piña.jpeg" , price: "$2.99" },
    { id: 31, title: "Pastel del día", description: "Postres", image: "../../assets/images/no products.jpeg"  , price: "$2.99" },
    { id: 32, title: "Guru dumpling frito", description: "Especial Guru Guru" , image: "../../assets/images/guru dumpling frito.jpeg", price:"$3.99" },
    { id: 33, title: "Rollo primavera", description: "Especial Guru Guru" , image: "../../assets/images/rollo primavera.jpeg" , price: "$3.99"},
    { id: 34, title: "Guru Pollo", description: "Especial Guru Guru" , image: "../../assets/images/no products.jpeg" , price: "$3.99" },
    { id: 35, title: "PapiGuruPollo" , description: "Papitas", image: "../../assets/images/papi guru pollo.jpeg"  , price: "$4.25" },
    { id: 36, title: "Salchipapita", description: "Papitas", image: "../../assets/images/salchipapita.jpeg" , price: "$4.25" },
    { id: 37, title: "Bubble tea/te frutal + snacks", description: "Combos 1", image: "../../assets/images/combo 1.png" , price: "$5" },
    { id: 38, title: "Bubble tea/te frutal + postres" , description: "Combos 2", image: "../../assets/images/combo 2.png" , price: "$6.4" },
    { id: 39, title: "Bubble tea/te frutal + guru special", description: "Combos 3", image: "../../assets/images/combo 3.png" , price: "$7.25" }
  ], 
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  filteredProducts: () => {
    const query = get().searchQuery.toLowerCase();
    return get().products.filter(product =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  },
}));