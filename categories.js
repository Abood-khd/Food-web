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
  const api = await fetch( `https://www.themealdb.com/api/json/v1/1/categories.php`  );
  result = await api.json();
  console.log(result);
  Display(result)
}
GetData();



function Display(result) {
  var box = ``;

  for (let j = 5; j < result.categories.length; j++) {
    console.log(result.categories[j]);
    box += `
    <div class="col-md-3 bg-dark">
    <div class="img-api position-relative overflow-hidden">
    <img src= ${result.categories[j].strCategoryThumb}   class="img-fluid w-100" alt="">
        <div class="layer d-flex align-items-center">
          <div class="">
            <h3 class="fw-bold ">${result.categories[j].strCategory}</h3>
          </div>
        </div>
    </div>
  </div>
    `;
  }
  display.innerHTML = box;
}