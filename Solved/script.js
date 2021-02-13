//WRITE YOUR CODE BELOW

var customerOrder = {
  drinkName: "coffee",
  numOfSugars: 0,
  isReady: false
}

console.log("The drink name is: " + customerOrder.drinkName);
console.log("Number of sugar(s): " + customerOrder.numOfSugars);

if (customerOrder.isReady) {
  console.log("Ready for pick-up");
}
else {
  console.log("Still in order queue");
}

for (var property in customerOrder) {
  console.log(`${property}:${customerOrder[property]}`);
}