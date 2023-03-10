// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (shoppingCart.indexOf("Meat") == -1) {
	shoppingCart.unshift("Meat");
} else {
	console.log("Meat is already present.");
}
if (shoppingCart.indexOf("Sugar") == -1) {
	shoppingCart.push("Sugar");
} else {
	console.log("Sugar is already present.");
}
console.log("Shopping Cart: ", shoppingCart);

let shoppingCartNew = shoppingCart.splice(4, 1);
console.log("Shopping Cart after removing honey: ", shoppingCart);

let shoppingCartNew2 = shoppingCart.splice(3, 1, "Green Tea");
console.log("Shopping Cart after modifying Tea: ", shoppingCart);
