class product2{

    price :number;

    constructor(price:number){
        this.price=price;
    }

    calculatediscount(){
        return this.price*0.05;
    }
}

class ElectronicProduct extends product2{

    override calculatediscount(): number {
        return this.price*0.05;
    }
}

class ClothingProduct extends product2 {
    override calculatediscount(): number {
        return this.price * 0.15;
    }
}

let product = new product2(1000);

let product1 = new ElectronicProduct(1000);

let product3 = new ClothingProduct(1000);

console.log("Product Discount: " + product.calculatediscount());
console.log("Electronic Discount: " + product1.calculatediscount());
console.log("Clothing Discount: " + product3.calculatediscount());