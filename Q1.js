"use strict";
let message = "Hello, TypeScript!";
console.log(message);
// Q.2
class Product {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    displayinfo() {
        console.log("Product ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
        console.log("-------------------");
    }
}
let p1 = new Product(101, "Laptop", 50000, "Electronics");
let p2 = new Product(102, "Shirt", 1000, "Clothing");
let p3 = new Product(103, "Rice", 800, "Grocery");
p1.displayinfo();
p2.displayinfo();
p3.displayinfo();
