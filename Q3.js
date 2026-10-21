"use strict";
class Products {
    productID;
    price;
    category;
    constructor(productID, price, category) {
        this.productID = productID;
        this.price = price;
        this.category = category;
    }
    displayPrice() {
        console.log("Price: " + this.price);
    }
}
class ElectronicProduct extends Products {
    showCategory() {
        console.log("Category: " + this.category);
    }
}
let pro = new ElectronicProduct(101, 50000, "Electronics");

console.log("Product ID: " + pro.productID);

pro.showCategory();

pro.displayPrice();
