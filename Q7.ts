function displayProducts<T>(items: T[]): void {
    for (let item of items) {
        console.log(item);
    }
}

displayProducts<string>(["Laptop", "Mobile", "Tablet"]);

displayProducts<number>([50000, 20000, 15000]);

displayProducts<number>([101, 102, 103]);

function getFirstElement<T>(items: T[]): T | undefined {
    return items[0];
}

console.log(getFirstElement<string>(["Laptop", "Mobile"]));
console.log(getFirstElement<number>([50000, 20000]));
console.log(getFirstElement<boolean>([true, false]));