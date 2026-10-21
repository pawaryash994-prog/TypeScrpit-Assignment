"use strict";
function displayProducts(items) {
    for (let item of items) {
        console.log(item);
    }
}
displayProducts(["Laptop", "Mobile", "Tablet"]);
displayProducts([50000, 20000, 15000]);
displayProducts([101, 102, 103]);
function getFirstElement(items) {
    return items[0];
}
console.log(getFirstElement(["Laptop", "Mobile"]));
console.log(getFirstElement([50000, 20000]));
console.log(getFirstElement([true, false]));
