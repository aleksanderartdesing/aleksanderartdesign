var pre = document.querySelector("#galery .buttons .prev");
var next = document.querySelector("#galery .buttons .next");
var images = document.querySelectorAll("#galery .photos img");
var i = 0;

next.onclick = function() {
  images[i].style.display = "none";
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = "block";
};

pre.onclick = function() {
  images[i].style.display = "none";
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = "block";
};