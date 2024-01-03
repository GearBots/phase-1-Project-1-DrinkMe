const moodOfDrinks = {
    "chill": ["Vodka", "Beer", "Wine"],
    "wild": ['Tequila', "Rum"],
    "sad":["Whiskey", "Gin"],
    "classy":["Wine", "Champagne"]
 }
 
 document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('#moods').addEventListener("change", (e) =>{
        const mood = e.target.value;
            dropDown(mood);
            console.log(mood)
    });
 });
 
 function dropDown(mood){
    const drinks = moodOfDrinks[mood];
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const randomDrink = drinks[randomIndex];
    console.log('Random Drink:', randomDrink); // Debugging line
    drinks.forEach((randomDrink)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${randomDrink}`)
        // fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`)
        .then(response => response.json())
        .then(drink =>{
            const drinkUp = drink.drinks[0];
            console.log(drink.drinks)
            const drinkImg = document.querySelector('#detail-image');
            const drinkName = document.querySelector('#detail-name');
            const drinkIng = document.querySelector('#detail-ingredients');
            const drinkInst = document.querySelector('#detail-instructions');
            
            drinkImg.src = drinkUp.strDrinkThumb;
            drinkName.textContent = drinkUp.strDrink;
            // drinkIng.textContent = drinkUp.strIngredient1 + ', ' + drinkUp.strIngredient2 + ', ' + drinkUp.strIngredient3 + ', ' + drinkUp.strIngredient4 + ', ' + drinkUp.strIngredient5 + ', ' + drinkUp.strIngredient6;
            drinkInst.textContent = drinkUp.strInstructions;
            console.log(drinkUp)
            drinkDetails(drinkUp)
        });

        function drinkDetails(drinkUp){
            console.log(drinkUp)
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkUp.idDrink}`)
            .then(response => response.json())
            .then(data => {
                console.log(data) 
                const drinkIng = document.querySelector('#detail-ingredients');
                const drinkIng2 = document.querySelector('#detail-ingredients2')
                const drinkIng3 = document.querySelector('#detail-ingredients3')
                const firstIngredient= data.drinks[0].strIngredient1;
                const secondIngredient= data.drinks[0].strIngredient2;
                const thirdIngredient = data.drinks[0].strIngredient3;
                if(firstIngredient && secondIngredient
                    ) {
                    drinkIng.textContent = firstIngredient; 
                    drinkIng2.textContent = secondIngredient; 
                    drinkIng3.textContent = thirdIngredient
                } else {
                    drinkIng.textContent = "No ingredients are available for this drink!";
                }
                // const secondIngredient= data.drinks[0].strIngredient2;
                // if(secondIngredient) {
                //     drinkIng.textContent = secondIngredient; 
                // } else {
                //     drinkIng.textContent = "No more ingredients are available for this drink!";
                // }
            })
        }

    })



}
 