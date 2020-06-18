function groceriesList(){
  var g= document.getElementById("grocery-list").value;
  var groceries = g.split(",");
  console.log(groceries);
  groceries.forEach(function(grocery){
    console.log(grocery);
  });
}
