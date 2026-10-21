"use strict";
class Products {
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
}
function printProduct(product) {
    console.log("Product ID: " + product.productID);
    console.log("Name: " + product.name);
    console.log("Price: " + product.price);
    console.log("Category: " + product.category);
    console.log("-------------------");
}
let pro1 = new Products(101, "Laptop", 50000, "Electronics");
let pro2 = new Products(102, "Shirt", 1000, "Clothing");
printProduct(pro1);
printProduct(pro2);
