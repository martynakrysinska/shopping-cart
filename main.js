import { ShopItem } from "./styles.js";
import { Shop } from "./shop.js";
import { ShoppingCart } from "./shoppingcart.js";

let shop = new Shop();
let newCart = new ShoppingCart();
newCart.display();

shop.products.forEach(product => {
  let item = new ShopItem(product, shop.container, newCart);
  item.display();
});
