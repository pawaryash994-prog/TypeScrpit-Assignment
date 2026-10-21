abstract class Product {
    productID: number;
    name: string;
    price: number;

    constructor(productID: number, name: string, price: number) {
        this.productID = productID;
        this.name = name;
        this.price = price;
    }

    abstract calculateFinalPrice(): number;

    displayInfo(): void {
        console.log("Product ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Final Price: " + this.calculateFinalPrice());
        console.log("-------------------");
    }
}

class ElectronicProduct extends Product {
    calculateFinalPrice(): number {
        return this.price - (this.price * 0.10);
    }
}

class GroceryProduct extends Product {
    calculateFinalPrice(): number {
        return this.price - (this.price * 0.05);
    }
}

let p1 = new ElectronicProduct(101, "Laptop", 50000);
let p2 = new GroceryProduct(102, "Rice", 1000);

p1.displayInfo();
p2.displayInfo();