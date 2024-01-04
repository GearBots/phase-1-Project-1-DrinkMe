
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
            btnClick();
            console.log(mood)
    });
 });




 function btnClick(randomClick) {
    const button = document.querySelector('#btn')
    const drinkImg = document.querySelector('#detail-image');
    const drinkName = document.querySelector('#detail-name');
    const drinkIng = document.querySelector('#detail-ingredients');
    const drinkInst = document.querySelector('#detail-instructions');
    


    // Change the color of the random drink button for each mood that is mousedover.
    button.addEventListener('mouseover', function(){
        btn.style.backgroundColor = 'red';
    })
    //     if(mood === 'chill'){
    //         btn.style.backgroundColor = 'purple';
    //     }
    //     if(mood === 'wild'){
    //         btn.style.backgroundColor = 'yellow';
    //     }
    //     if(mood === 'sad'){
    //         btn.style.backgroundColor = 'blue';
    //     }
    //     if(mood === 'classy'){
    //         btn.style.backgroundColor = 'green';
    //     } 
    // })

    // Change the color of the random drink button back to white when mouse leaves button.
    button.addEventListener('mouseout', function(){
        btn.style.backgroundColor = 'white';
    })


    // Show a tooltip with a mood-specific message when mouse hovers btn:
    // button.addEventListener('mouseover', ()=>{
    //     let moodSelector = document.querySelector('#moods');
    //     let tooltipText = '';
    //     if(moodSelector === 'chill'){
    //         tooltipText = 'Time to relax with a drink';
    //     }
    //     if(moodSelector === 'wild'){
    //         tooltipText = 'Let\'s get the party started!';
    //     }
    //     if(moodSelector === 'sad'){
    //         tooltipText = 'This drink will cheer you up';
    //     }
    //     if(moodSelector === 'classy'){
    //         tooltipText = 'Enjoy a sophisticated drink';
    //     } 
    //     button.setAttribute('title', tooltipText);
    // })
 

    
    button.addEventListener("click", ()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(results => results.json())
    .then(data => {
            console.log("click")
            drinkImg.src = data.drinks[0].strDrinkThumb;
            drinkName.textContent = data.drinks[0].strDrink;
            drinkInst.textContent = data.drinks[0].strInstructions;
        })
    })
}



 function dropDown(mood){
    const drinks = moodOfDrinks[mood];
    const randomIndex = Math.floor(Math.random() * drinks.length);
    const randomDrink = drinks[randomIndex];
    console.log('Random Drink:', randomDrink); // Debugging line
    drinks.forEach((randomDrink)=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${randomDrink}`)
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
            drinkInst.textContent = drinkUp.strInstructions;
            console.log(drinkUp)
            drinkDetails(drinkUp)
            btnClick()
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
                if (firstIngredient && secondIngredient
                    ) {
                    drinkIng.textContent = firstIngredient; 
                    drinkIng2.textContent = secondIngredient; 
                    drinkIng3.textContent = thirdIngredient
                } else {
                    drinkIng.textContent = "No ingredients are available for this drink!";
                }
            })
        }
    })
}