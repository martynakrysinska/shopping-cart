export class Shop {
  constructor() {
    this.products = [
      {
        artist: "J Dilla",
        title: "Donuts",
        image: "jay_dilla_jay_dee_donuts.jpg",
        price: 20.99,
        quantity: 0
      },
      {
        artist: "Flying Lotus",
        title: "Cosmogramma",
        image: "flying_lotus_cosmogramma.jpg",
        price: 15.99,
        quantity: 0
      },
      {
        artist: "Madlib",
        title: "Shades of Blue",
        image: "madlib_shades_of_blue.jpg",
        price: 17.99,
        quantity: 0
      },
      {
        artist: "MF DOOM",
        title: "Mmm food",
        image: "mf_doom.jpg",
        price: 18.99,
        quantity: 0
      },

      {
        artist: "Wu-Tang-Clan",
        title: "Enter the Wu-Tang",
        image: "wu_tang_clan_enter_the_wu_tang.jpg",
        price: 14.99,
        quantity: 0
      },

      {
        artist: "Nas",
        title: "Illmatic",
        image: "nas_illmatic.jpg",
        price: 15.99,
        quantity: 0
      }
    ];
    this.container = document.getElementById("shop");
    this.list = document.createElement("ul");
  }
}
