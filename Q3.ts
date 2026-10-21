class Products{

    public productID: number;
    private price: number;
    protected category: string;


constructor(productID: number, price: number, category: string) {
        this.productID = productID;
        this.price = price;
        this.category = category;
    }
     displayPrice() {
        console.log("Price: " + this.price);
    }
}

class ElectronicProduct extends Products {
    showCategory(): void {
        console.log("Category: " + this.category);
    }
}

let pro = new ElectronicProduct(101, 50000, "Electronics");


console.log("Product ID: " + pro.productID);


pro.showCategory();


pro.displayPrice();
