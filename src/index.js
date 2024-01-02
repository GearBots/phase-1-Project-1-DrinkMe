var moodOfDrinks = {
    "chill": ["vodka", "beer", "wine"],
    "wild": ['tequila', "rum"],
    "sad":["whiskey", "gin"]
 }
 
 addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('#moods').addEventListener("change", (e) =>{
        const mood = e.target.value;
            dropDown(mood);
            console.log(mood)
    });
 });
 
 function dropDown(mood){
    var drinks = moodOfDrinks[mood];
    var randomIndex = Math.floor(Math.random() * drinks.length);
    var randomDrink = drinks[randomIndex];
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${randomDrink}`)
    .then(result => result.json())
    .then(drink =>{
        const drinkImg = document.querySelector('#detail-image');
        const drinkName = document.querySelector('#detail-name');
        const drinkIng = document.querySelector('#detail-ingredients');
        const drinkInst = document.querySelector('#detail-instructions');
 
        drinkImg.src = drink.strDrinkThumb;
        drinkName.textContent = drink.strDrink;
        drinkIng.textContent = drink.strIngredient1 + ', ' + drink.strIngredient2 + ', ' + drink.strIngredient3 + ', ' + drink.strIngredient4 + ', ' + drink.strIngredient5 + ', ' + drink.strIngredient6;
        drinkInst.textContent = drink.strInstructions;
    });
 }
 