function rotate(array) {
  let counterTimes = array.pop();
  for(i = 0; i < counterTimes; i++) {
  let lastElement = array.pop();
  array.unshift(lastElement);
  }
  console.log(array.join(" "));
}

rotate([1,2,3,4,2]);
rotate(["Orange", "Coconut", "Banana", "Apple",15]);