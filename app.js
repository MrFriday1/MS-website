const sandwichNames = ["Hot Sandwich", "Pickle Sanwich", "Spicy Sandwich", "Tasty Sandwich", "Terrible Sandwich"]

function sandwichGenerator() {
    let sandwich = sandwichNames[Math.floor(Math.random() * sandwichNames.length)];
    console.log(sandwich);
    document.querySelector("#sandwichText").innerHTML = sandwich;
}
