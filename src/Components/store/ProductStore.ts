import {create} from 'zustand';

import jamaicaImage from "../../assets/images/bubble jamaica tea.jpeg";
import fresaImage from "../../assets/images/bubble tea fresa.jpeg";
import mangoImage from "../../assets/images/bubble tea mango.jpeg";
import iceBubbleTeaImage from "../../assets/images/ice bubble tea.jpeg";
import moraImage from "../../assets/images/mora.jpeg";
import manzanaImage from "../../assets/images/manzana.jpg";
import noProductsImage from "../../assets/images/no products.jpeg";
import oreoImage from "../../assets/images/Oreo Bubble Tea.jpg";
import guruBubbleCoffeeImage from "../../assets/images/guru bubble coffee.jpeg";
import matchaBubbleImage from "../../assets/images/matcha bubble.jpeg";
import matchaLatteImage from "../../assets/images/matchalatte.jpeg";
import panelaBubbleTeaImage from "../../assets/images/panela bubble tea.jpeg";
import taroBubbleTeaImage from "../../assets/images/taro bubble tea.jpeg";
import frappeTaroImage from "../../assets/images/frape de taro.jpeg";
import frappeFresaImage from "../../assets/images/frape fresa.jpeg";
import frappeFrutosRojosImage from "../../assets/images/frape frutos rojos.jpeg";
import frappePiñaImage from "../../assets/images/frape piña.jpeg";
import iceCreamImage from "../../assets/images/ice cream.jpeg";
import candyMilkImage from "../../assets/images/candy milk.jpeg";
import guruCakeImage from "../../assets/images/guru cake.jpeg";
import pastelLunaImage from "../../assets/images/pastel luna.jpeg";
import pastelPiñaImage from "../../assets/images/pastel piña.jpeg";
import guruDumplingFritoImage from "../../assets/images/guru dumpling frito.jpeg";
import rolloPrimaveraImage from "../../assets/images/rollo primavera.jpeg";
import papiGuruPolloImage from "../../assets/images/Papi Guru pollo.jpg";
import salchipapitaImage from "../../assets/images/salchi papita.jpg";
import combo1Image from "../../assets/images/combo 1.png";
import combo2Image from "../../assets/images/combo 2.png";
import combo3Image from "../../assets/images/combo 3.png";
import popPopTeaImage from "../../assets/images/Pop pop Tea.jpg";
import maracuyaImage from "../../assets/images/Maracuya.jpg";
import chiaImage from "../../assets/images/chia.jpg";
import jellyImage from "../../assets/images/Jelly Bubble Tea.jpg";
import bubbleOriginalImage from "../../assets/images/Bubble Tea Original.jpg";
import popPopBubbleImage from "../../assets/images/Pop Pop Bubble Tea.jpg";
import bubbleFlanImage from "../../assets/images/Bubble Flan.jpg";
import frappeOreoImage from "../../assets/images/Frappe de oreo 1.jpg";
import frappeGuruCoffe from "../../assets/images/Frappe Guru Coffe.jpg";
import guruTeaImage from "../../assets/images/Guru Tea.jpg";
import frappeMora from "../../assets/images/Frappe de Mora.jpg";
import guruPollo from "../../assets/images/Guru Pollo.jpg";


interface Product {
  isGlutenFree: boolean | undefined;
  isVegetarian: boolean | undefined;
  isVegan: boolean | undefined;
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
    { id: 1, title: "Bubble jamaica tea", description: "Té Frutal", image: jamaicaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 2, title: "Bubble tea de fresa", description: "Té Frutal", image: fresaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 3, title: "Bubble tea de mango", description: "Té Frutal", image: mangoImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 4, title: "Iced Bubble Tea", description: "Té Frutal", image: iceBubbleTeaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 5, title: "Bubble tea de mora", description: "Té Frutal", image: moraImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 6, title: "Bubble tea de manzana", description: "Té Frutal", image: manzanaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 7, title: "Bubble tea de maracuyá", description: "Té Frutal", image: maracuyaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 8, title: "Bubble tea de piña", description: "Té Frutal", image: noProductsImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 9, title: "Chia bubble tea", description: "Té Frutal", image: chiaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 10, title: "Pop pop Tea", description: "Té Frutal", image: popPopTeaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 11, title: "Bubble Tea", description: "Bubble Tea", image: bubbleOriginalImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 12, title: "Guru bubble coffee", description: "Bubble Tea", image: guruBubbleCoffeeImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 13, title: "Matcha Bubble Tea", description: "Bubble Tea", image: matchaBubbleImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 14, title: "Matchalatte", description: "Bubble Tea", image: matchaLatteImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 15, title: "Panela Bubble Tea", description: "Bubble Tea", image: panelaBubbleTeaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 16, title: "Taro Bubble Tea", description: "Bubble Tea", image: taroBubbleTeaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 17, title: "Bubble flan", description: "Bubble Tea", image: bubbleFlanImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 18, title: "Jelly Bubble", description: "Bubble Tea", image: jellyImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 19, title: "Pop pop Bubble Tea", description: "Bubble Tea", image: popPopBubbleImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 20, title: "Oreo Bubble Tea", description: "Bubble Tea", image: oreoImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 21, title: "Guru Tea", description: "Bubble Tea", image: guruTeaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 22, title: "Frape de taro", description: "Frapé", image: frappeTaroImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 23, title: "Frape de fresa", description: "Frapé", image: frappeFresaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 24, title: "Frape de frutos rojos", description: "Frapé", image: frappeFrutosRojosImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 25, title: "Frape de piña", description: "Frapé", image: frappePiñaImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 40, title: "Frape de oreo", description: "Frapé", image: frappeOreoImage, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 41, title: "Frape Guru Coffee", description: "Frapé", image: frappeGuruCoffe, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 42, title: "Frape de mora", description: "Frapé", image: frappeMora, priceLarge: "$4.75", priceMedium:"$3.75", isVegan: false, isVegetarian: true, isGlutenFree: true},
    { id: 26, title: "Ice cream", description: "Postres", image: iceCreamImage, price: "$0", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 27, title: "Candy milk", description: "Postres", image: candyMilkImage, price: "$0", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 28, title: "Guru Cake", description: "Postres", image: guruCakeImage, price: "$0", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 29, title: "Pastel de luna", description: "Postres", image: pastelLunaImage, price: "$2.99", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 30, title: "Pastel de piña", description: "Postres", image: pastelPiñaImage, price: "$2.99", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 31, title: "Pastel del día", description: "Postres", image: noProductsImage, price: "$2.99", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 32, title: "Guru dumpling frito", description: "Especial Guru Guru", image: guruDumplingFritoImage, price: "$3.99", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 33, title: "Rollo primavera", description: "Especial Guru Guru", image: rolloPrimaveraImage, price: "$3.99", isVegan: false, isVegetarian: true, isGlutenFree: false},
    { id: 34, title: "Guru Pollo", description: "Especial Guru Guru", image: guruPollo, price: "$3.99", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 35, title: "PapiGuruPollo", description: "Papitas", image: papiGuruPolloImage, price: "$4.25", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 36, title: "Salchipapita", description: "Papitas", image: salchipapitaImage, price: "$4.25", isVegan: true, isVegetarian: true, isGlutenFree: true},
    { id: 37, title: "Bubble tea/te frutal + snacks", description: "Combos 1", image: combo1Image, price: "$5", isVegan: false, isVegetarian: false, isGlutenFree: false},
    { id: 38, title: "Bubble tea/te frutal + postres", description: "Combos 2", image: combo2Image, price: "$6.4", isVegan: false, isVegetarian: false, isGlutenFree: false},
    { id: 39, title: "Bubble tea/te frutal + guru special", description: "Combos 3", image: combo3Image, price: "$7.25", isVegan: false, isVegetarian: false, isGlutenFree: false}
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
