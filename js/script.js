//Event Handler for when we click the button.
document.getElementById("foodSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  var value = document.getElementById("foodInput").value;
  value = encodeURIComponent(value.trim());
  if (value === "")
    return;
  console.log(value);



  //For the current weather
  const url = "https://api.edamam.com/api/food-database/v2/parser?ingr=" + value + "&app_id=dd28b8dc&app_key=bfa3bb64d35f29a85d23cf7e756d3af3";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      document.getElementById("foodName").innerHTML = json.hints[0].food.label;
      document.getElementById("foodCals").innerHTML = json.hints[0].food.nutrients.ENERC_KCAL;
      document.getElementById("foodFats").innerHTML = json.hints[0].food.nutrients.FAT;
      document.getElementById("foodProts").innerHTML = json.hints[0].food.nutrients.PROCNT;
      document.getElementById("foodCarbs").innerHTML = json.hints[0].food.nutrients.CHOCDF;

    });
});

document.getElementById("foodAdd").addEventListener("click", function(event) {
  let calories = document.getElementById("foodCals").innerHTML;
  let fats = document.getElementById("foodFats").innerHTML;
  let prots = document.getElementById("foodProts").innerHTML;
  let carbs = document.getElementById("foodCarbs").innerHTML;
  let foodAddition = "";
  foodAddition += "<tr> <td>" + document.getElementById("foodName").innerHTML + "</td>";
  foodAddition += "<td>" + calories + "</td>";
  foodAddition += "<td>" + fats + "</td>";
  foodAddition += "<td>" + prots + "</td>";
  foodAddition += "<td>" + carbs + "</td> </tr>";
  document.getElementById("dietLog").innerHTML += foodAddition;

  let calTot = 0;
  let fatTot = 0;
  let protTot = 0;
  let carbTot = 0;
  for (let i = 1; i < document.getElementById("dietLog").rows.length; i++) {
    calTot += parseFloat(document.getElementById("dietLog").rows[i].cells[1].innerHTML);
  }
  for (let i = 1; i < document.getElementById("dietLog").rows.length; i++) {
    fatTot += parseFloat(document.getElementById("dietLog").rows[i].cells[2].innerHTML);
  }
  for (let i = 1; i < document.getElementById("dietLog").rows.length; i++) {
    protTot += parseFloat(document.getElementById("dietLog").rows[i].cells[3].innerHTML);
  }
  for (let i = 1; i < document.getElementById("dietLog").rows.length; i++) {
    carbTot += parseFloat(document.getElementById("dietLog").rows[i].cells[4].innerHTML);
  }

  document.getElementById("calTotal").innerHTML = calTot;
  document.getElementById("fatTotal").innerHTML = fatTot;
  document.getElementById("protTotal").innerHTML = protTot;
  document.getElementById("carbTotal").innerHTML = carbTot;

});
