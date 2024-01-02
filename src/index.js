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
    .then(drinkList => {
        dropDown(drinkList)
    })

    function dropDown(drinkList){
        cosnt 
    }

})