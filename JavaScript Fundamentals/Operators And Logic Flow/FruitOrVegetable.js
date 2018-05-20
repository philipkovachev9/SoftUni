/*
8. Fruit or Vegetable
Write a JS function to print &quot;fruit&quot;, &quot;vegetable&quot; or &quot;unknown&quot; depending on the input string.
 Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
 Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
 All others are unknown
The input comes as a single string argument, the name of the fruit.
The output should be printed to the console.
*/

function fruitOrVegetable(input) {
    if (input === "banana" || input === "apple" || input === "kiwi" || input === "cherry" || input === "lemon" || input === "grapes" || input === "peach") {
        console.log("fruit");
    } else if (input === "tomato" || input === "cucumber" || input === "pepper" || input === "onion" || input === "garlic" || input === "parsley") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

fruitOrVegetable("banana");
fruitOrVegetable("cucumber");
fruitOrVegetable("pizza");