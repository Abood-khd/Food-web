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
  

let display = document.getElementById('display')
var result = [];

async function GetData(s) {
  const api = await fetch( `https://www.themealdb.com/api/json/v1/1/list.php?a=list`  );
  result = await api.json();
  Display(result)
}
GetData();



function Display(result) {
  var box = ``;

  for (let j = 5; j < result.meals.length; j++) {
    box += `
    <div class="col-md-3 bg-dark">
    <div class=" position-relative overflow-hidden">
    <span><i class="fa-solid fa-house fa-4x"></i></span>
            <h2 class="fw-bold text-white mt-2" onClick=${result.meals[j].idMeal}  >${result.meals[j].strArea}</h2>
        </div>
  </div>
    `;
  }
  display.innerHTML = box;
}

// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

async function GetDataArea(id) {
  const api = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`  );
  result = await api.json();
  console.log(result);
  datillsArea()
}
GetDataArea();


function datillsArea(id) {
  const meal = result.meals.find((x) => x.idMeal == id);
  boxContainer.classList.remove("coustemboxContainer");
  display.classList.add('coustemboxContainer')
  let box = ``;
  box += `
  
  <div class="col-md-4 mt-5">
  <img src="${meal.strMealThumb}" class="w-100 rounded-3" alt="">
  <h3 class="title text-white">sushi</h3>
</div>

</div>
  `;

  display.innerHTML = box;
}