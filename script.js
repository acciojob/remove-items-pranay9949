//your JS code here. If required.
let color=document.getElementById("colorSelect");
document.querySelector.contains = function(selector, text) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent === text) {
      return elements[i];
    }
  }
  return null;
};
function remove(){
       var elementToFind = document.querySelector.contains('option',color.value);
    elementToFind.remove();

}