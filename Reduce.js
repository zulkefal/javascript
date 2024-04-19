const price = [10, 20, 30, 40, 50];

const shoppingCart = [
    { itemName: "Course 1", price: 100 },
    { itemName: "Course 2", price: 1000 },
    { itemName: "Course 3", price: 10000 },
    { itemName: "Course 4", price: 100000 },
  ];

const total = price.reduce(function (acc, curVal) {
  console.log(`acc:${acc} and currValuel:${curVal}`);
  return acc + curVal;
}, 0);

const shoping = shoppingCart.reduce((acc,item)=>
    acc+item.price,0)

console.log("Bill:",shoping)

console.log("total", total);
const totals = price.reduce((acc, curVal) => acc + curVal, 0);

console.log("Totals", totals);
