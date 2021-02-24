function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("nav-menu");
    if (x.className === "topnav") {
      x.className += " responsive";
     y.className += " responsive";

    } else {
      x.className = "topnav";
      y.className = "nav-menu";
    }
  }