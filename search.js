$(document).ready(function () {
  
  $('#spinner').fadeOut(1000,function () {
    $('body').css('overflow','auto')
  })
  })
  

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
var display = document.getElementById("display");
var result = [];

async function GetData(s) {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`
  );
  result = await api.json();
  console.log(result);
  searchName(result)
}
GetData();

function searchName() {
  let box = ``
  for (let i = 0; i < result.meals.length; i++) {
      box+=`

      <div class="col-md-3">
      <div class="img-api position-relative overflow-hidden">
      <img src= ${result.meals[i].strMealThumb}   class="img-fluid w-100" alt="">
          <div class="layer d-flex align-items-center">
            <div class="">
              <h3 class="fw-bold ">${result.meals[i].strMeal}</h3>
            </div>
          </div>
      </div>
    </div>
      `
  }
  display.innerHTML=box;

}

async function GetDataFirst(f) {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${f}`
  );
  result = await api.json();
  console.log(result);
  searchName(result);
}
GetDataFirst();
