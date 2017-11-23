window.onscroll = function(){changeNavigation()};
function changeNavigation() {
  var x = document.getElementById("nav");
  if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) >= (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0)){
    if (!x.className.includes("content-nav")) {
      x.className += " content-nav";
    }
  }else if((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) < (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0)){
    x.className = x.className.replace(/\b content-nav\b/,'');
  }
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openCloseNavigation() {
  var x = document.getElementById("nav");
  if (!x.className.includes("responsive")) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(/\b responsive\b/,'');
  }
}
