import Bibimbap from "../assets/food/Bibimbap.jpeg";
import Japchae from "../assets/food/Japchae.png";
import Kimchi from "../assets/food/Kimchi.jpeg";
import Patbingsu from "../assets/food/Patbingsu.jpg";
import Soju from "../assets/food/Soju.jpeg";
const dishes = [
  {
    id: 1,
    name: "Japchae",
    short_description: "Korean stir-fried noodles with vegetables and beef.",
    price: 14.99,
    image: Bibimbap
  },
  {
    id: 2,
    name: "Bibimbap",
    short_description: "Korean rice bowl with mixed vegetables and beef.",
    price: 12.99,
    image: Japchae
  },
  {
    id: 3,
    name: "Kimchi",
    short_description: "Korean fermented vegetables with a spicy kick.",
    price: 6.99,
    image: Kimchi
  },
  {
    id: 4,
    name: "Soju",
    short_description: "Korean rice liquor with a smooth and clean finish.",
    price: 8.99,
    image: Soju
  },
  {
    id: 5,
    name: "Patbingsu",
    short_description: "Korean shaved ice dessert with red beans and fruit.",
    price: 8.99,
    image: Patbingsu
  }
];

export const newArrivalRestaurants = [
    {
      id: 1,
      imgUrl: "https://www.example.com/images/restaurant1.jpg",
      title: "Da Nang Restaurant",
      rating: 4.5,
      genre: "Vietnamese",
      address: "123 Main Street",
      short_description: "Authentic Vietnamese dishes made with fresh ingredients.",
      dishes: dishes,
      long: "-122.419416",
      lat: "37.774929"
    },
    {
        id: 2,
        imgUrl: "https://www.example.com/images/restaurant2.jpg",
        title: "Korean BBQ House",
        rating: 4.7,
        genre: "Korean",
        address: "456 Main Street",
        short_description: "Grilled Korean BBQ dishes cooked to perfection.",
        dishes: dishes,
        long: "-122.088450",
        lat: "37.422050"
      },
      {
        id: 3,
        imgUrl: "https://www.example.com/images/restaurant3.jpg",
        title: "Sushi Express",
        rating: 4.2,
        genre: "Japanese",
        address: "789 Main Street",
        short_description: "Authentic Japanese sushi and rolls made with fresh ingredients.",
        dishes: dishes,
        long: "-121.968810",
        lat: "37.338280"
      },
      {
        id: 4,
        imgUrl: "https://www.example.com/images/restaurant4.jpg",
        title: "Taco Tequila",
        rating: 4.8,
        genre: "Mexican",
        address: "321 Main Street",
        short_description: "Authentic Mexican tacos and tequila made with fresh ingredients.",
        dishes: dishes,
        long: "-122.088450",
        lat: "37.422050"
      },
      {
        id: 5,
        imgUrl: "https://www.example.com/images/restaurant5.jpg",
        title: "Pizza Palace",
        rating: 4.9,
        genre: "Italian",
        address: "654 Main Street",
        short_description: "Authentic Italian pizzas made with fresh ingredients.",
        dishes: dishes,
        long: "-121.968810",
        lat: "37.338280"
      }
    ];