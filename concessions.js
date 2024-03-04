fetch("./consessions.json")
.then(response => response.json())
.then(myCon => populateCon(myCon))
.catch(function(err){
    console.log("Error: " + err);
})

function populateCon(myCon){
    var MainContainer = document.getElementById("food");
    console.log(myCon.food);
    var foods = myCon.food;
    console.log(foods);
    for(let item of foods){
        let div = document.createElement("div");
        div.innerHTML = `<div class="card shadow-sm small-text" >
        <img src=${item.img} class="card-img-top" alt="${item.name}"></img>
            <div class="card-body">
            <p class="card-text"><strong>${item.name}</strong></p>
            <div>Prices per size:</div>
            <p><em>Small:</em> ${item.small}</p>
            <p><em>Medium:</em> ${item.medium}</p>
            <p><em>Large:</em> ${item.large}</p>
            </div>
        </div>`
        ;
        MainContainer.appendChild(div);
    }  




    var MainContainer = document.getElementById("drinks");
    var drink = myCon.drinks;
    for(let item of drink){
        let div = document.createElement("div");
        div.innerHTML = `<div class="card shadow-sm small-text" >
        <img src=${item.img} class="card-img-top" alt="${item.name}"></img>
            <div class="card-body">
            <h1 class="card-text"><strong>${item.name}</strong></h1>
            <div>Prices per size:</div>
            <p><em>Small:</em> ${item.small}</p>
            <p><em>Medium:</em> ${item.medium}</p>
            <p><em>Large:</em> ${item.large}</p>
            </div>
        </div>`
        ;
        MainContainer.appendChild(div);
    }



    var MainContainer = document.getElementById("treats");
    var treat = myCon.treats;
    for(let item of treat){
        let div = document.createElement("div");
        div.innerHTML = `<div class="card shadow-sm small-text" >
        <img src=${item.img} class="card-img-top" alt="${item.name}"></img>
            <div class="card-body">
            <p class="card-text"><strong>${item.name}</strong></p>
            <div>Prices per size:</div>
            <p>Small: ${item.small_price}</p>
            <p>Large: ${item.large_price}</p>
            <p><strong>Flavors: </strong><em>${item.flavors[0]}, ${item.flavors[1]}, ${item.flavors[2]}, ${item.flavors[3]}, ${item.flavors[4]}</em></p>
            </div>
        </div>`
        ;
        MainContainer.appendChild(div);
    }
}


