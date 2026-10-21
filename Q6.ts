interface IProduct {
    productID: number;
    name: string;
    price: number;
    category: string;
}

class Products implements IProduct {
    productID: number;
    name: string;
    price: number;
    category: string;

    constructor(productID: number, name: string, price: number, category: string) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

function printProduct(product: IProduct): void {
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