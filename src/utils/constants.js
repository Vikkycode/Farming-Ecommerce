import {
  Carousel3,
  Carousel1,
  Carousel2,
  Carousel4,
  Carousel5,
} from "../assets";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const WELCOME = "Welcome...";
const EMAIL = "Email";
const APP_NAME = "FarmPay";

const headerMiddleList = [
  { name: "Home", path: "/home" },
  // { name: "About", path: "/home/about" },
  { name: "Contact", path: "/home/contact" },
  { name: "Shop", path: "/home/shop/all" },
  { name: "Cart", path: "/home/cart" },
];

const ROUTES = {
  HOME: "/home",
  SHOP: "/shop",
  CART: "/cart",
  CONTACT: "/contact",
  ABOUT: "/about",
  SIGN_UP: "/signup",
  WILD: "/",
  ALL: "/all",
  VEGETABLES: "/vegetables",
  FRUITS: "/fruits",
  GRAINS: "/grains",
  CHECKOUT: "/checkout",
  PRODUCT: "/product",
};

const routesNameByPath = {
  [ROUTES.HOME]: "Home",
  [ROUTES.SHOP]: "Shop",
  [ROUTES.CONTACT]: "Contact",
  [ROUTES.CART]: "Cart",
  [ROUTES.ALL]: "All",
  [ROUTES.GRAINS]: "Grains",
  [ROUTES.FRUITS]: "Fruits",
  [ROUTES.VEGETABLES]: "Vegetables",
  [ROUTES.CHECKOUT]: "Checkout",
  [ROUTES.PRODUCT]: "Product",
};

const ImageList = [Carousel3, Carousel1, Carousel2, Carousel4, Carousel5];

export {
  WELCOME,
  EMAIL,
  emailRegex,
  APP_NAME,
  ImageList,
  headerMiddleList,
  ROUTES,
  routesNameByPath,
};
