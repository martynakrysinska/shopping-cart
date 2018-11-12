export class ShoppingCart {
  constructor() {
    this.items = [];
    this.list = document.getElementById("cart-list");
  }

  addItem(item) {
    if (this.items.includes(item)) {
      item.quantity++;
    } else {
      this.items.push(item);
      item.quantity++;
    }
    this.update();
  }

  deleteAll() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  deleteOne(item) {
    item.quantity--;
    this.update();
  }

  display() {
    let h2 = document.getElementById("cart-title");
    h2.innerHTML = `Total cost: $${this.countTotalPrice()}`;

    this.items.forEach(item => {
      if (item.quantity > 0) {
        let li = document.createElement("li");
        li.classList.add("w-75", "m-1");
        let box = document.createElement("div");
        box.classList.add("row", "justify-content-center");

        let count = document.createElement("div");
        count.innerHTML = `${item.quantity}`;
        count.classList.add("col-1");

        let name = document.createElement("div");
        name.innerHTML = `"${item.title}"`;
        name.classList.add("col-9", "text-center");

        let bin = document.createElement("div");
        bin.innerHTML = `<i class="fas fa-trash"></i>`;
        bin.classList.add("col-2");
        bin.onclick = () => {
          this.deleteOne(item);
        };

        box.appendChild(count);
        box.appendChild(name);
        box.appendChild(bin);

        li.appendChild(box);

        this.list.appendChild(li);
      }
    });
  }

  countItems() {
    return this.items.reduce((sum, obj) => {
      return sum + obj.quantity;
    }, 0);
  }

  countTotalPrice() {
    let prices = this.items.map(item => item.price * item.quantity);
    let sum = prices.reduce((sum, price) => {
      return sum + price;
    }, 0);
    return sum.toFixed(2);
  }

  update() {
    this.deleteAll();
    this.display();
  }
}
