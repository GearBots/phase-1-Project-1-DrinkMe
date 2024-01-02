addEventListener("DOMContentLoaded", ()=>{
    fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(result => result.json())
    .then(drinkList => {
        dropDown(drinkList)
    })

    function dropDown(drinkList){
        cosnt 
    }

})