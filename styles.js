export class ShopItem {
  constructor(product, container, cart) {
    this.product = product;
    this.container = container;
    this.cart = cart;
    this.ul = document.getElementById("shop-list");
    this.ulClasses = ["list-inline", "text-center"];
    this.li = document.createElement("li");
    this.liClasses = ["list-inline-item", "text-center", "m-2"];
    this.box = document.createElement("div");
    this.buy_btn = document.createElement("button");
  }

  styleBox() {
    let img = document.createElement("img");
    img.setAttribute("src", `images/${this.product.image}`);

    let title = document.createElement("h6");
    title.innerHTML = `<i>"${this.product.title}"</i> <br> ${
      this.product.artist
    }`;

    let price = document.createElement("p");
    price.innerHTML = `$${this.product.price}`;

    this.box.appendChild(title);
    this.box.appendChild(img);
    this.box.appendChild(price);
  }

  styleLi() {
    this.liClasses.forEach(clas => this.li.classList.add(clas));
    this.li.appendChild(this.box);
    this.li.onclick = () => {
      this.cart.addItem(this.product);
    };
  }

  styleUl() {
    this.ulClasses.forEach(clas => this.ul.classList.add(clas));
    this.ul.appendChild(this.li);
  }

  display() {
    this.styleBox();
    this.styleLi();
    this.styleUl();
    this.container.appendChild(this.ul);
  }
}
