"use strict";
class Product {
    productID;
    name;
    price;
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log("Product ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Final Price: " + this.calculateFinalPrice());
        console.log("-------------------");
    }
}
class ElectronicProduct extends Product {
    calculateFinalPrice() {
        return this.price - (this.price * 0.10);
    }
}
class GroceryProduct extends Product {
    calculateFinalPrice() {
        return this.price - (this.price * 0.05);
    }
}
let p1 = new ElectronicProduct(101, "Laptop", 50000);
let p2 = new GroceryProduct(102, "Rice", 1000);
p1.displayInfo();
p2.displayInfo();
