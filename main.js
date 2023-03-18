var boxwidth = $("#boxcontent").width();

var left = true;

$("#close").click(() => {
  if (left) {
    $("#slidbox").animate({ left: `-${boxwidth}` }, 1000);
    left = false;
  } else {
    $("#slidbox").animate({ left: 0 }, 1000);
    left = true;
  }
});



$(document).ready(function () {
  
$('#spinner').fadeOut(1000,function () {
  $('body').css('overflow','auto')
})
})




















var result = [];
var resultdatils = [];
var display = document.getElementById("display");
let rowdatils = document.getElementById("rowdatils");
let boxContainer = document.getElementById("boxContainer");





















async function GetData() {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  result = await api.json();
  console.log(result);
  Display(result);
}
GetData();

function Display(result) {
  var box = ``;

  for (let j = 5; j < result.meals.length; j++) {
    box += `
    <div class="col-md-3" onClick=datills(${result.meals[j].idMeal})>
    <div class="img-api position-relative overflow-hidden">
    <img src= ${result.meals[j].strMealThumb}   class="img-fluid w-100" alt="">
        <div class="layer d-flex align-items-center">
          <div class="">
            <h3 class="fw-bold ">${result.meals[j].strMeal}</h3>
          </div>
        </div>
    </div>
  </div>
    `;
  }
  display.innerHTML = box;
}

function datills(id) {
  const meal = result.meals.find((x) => x.idMeal == id);
  boxContainer.classList.remove("coustemboxContainer");
  display.classList.add('coustemboxContainer')
  let box = ``;
  box += `
  
  <div class="col-md-4 mt-5">
  <img src="${meal.strMealThumb}" class="w-100 rounded-3" alt="">
  <h3 class="title text-white">sushi</h3>
</div>
<div class="col-md-8 mt-5">
  <h1 class="text-white">Instructions</h1>
  <p class="text-white mt-1">${meal.strInstructions}</p>

  <h3 class="text-white">Area : <p class="d-inline">${meal.strArea}</p></h3>
  <h3 class="text-white mt-1">category : <p class="d-inline">${meal.strCategory}</p></h3>
  <h4 class="text-white "> Recipes</h4>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient1}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient2}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient3}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient4}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient5}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient6}</span>
  <span class="bg-secondary text-warning p-1 rounded-2">${meal.strIngredient7}</span>
  <h3 class="text-white mt-2">Tags :</h3>
  <button   class="btn btn-primary">          <a    target="_blank" href="${meal.strSource} ">Source</a>        </button>
  <button class="btn btn-danger">                   <a target="_blank"   href="${meal.strYoutube}">Youtube</a>                         </button>
</div>
  `;

  rowdatils.innerHTML = box;
}
