"use strict";
class Product1 {
    static companyname = "techstore";
    productID;
    name;
    price;
    constructor(productID, name, price) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }
    static displaycompany() {
        console.log("company name:" + Product1.companyname);
    }
    displayinfo() {
        console.log("productid" + this.productID);
        console.log("productname" + this.name);
        console.log("price" + this.price);
    }
}
let p4 = new Product1(101, "laptop", 80000);
let p5 = new Product1(102, "mobile", 25000);
p4.displayinfo();
p5.displayinfo();
Product1.displaycompany();
