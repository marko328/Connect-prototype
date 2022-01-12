function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

function feedback() {
    var x = document.getElementById("frm");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("comment").innerHTML = text;
  }
  
  