var menuButton = document.getElementById("side-nav");

var displaySideNav = function() {
    menuButton.style.margin = "0px 0px 0px 0px"; 
    menuButton.style.WebkitTransition = "all linear 0.3s";
    menuButton.style.transition = "all linear 0.3s"; 
}

var hideSideNav = function() {
    menuButton.style.margin = "0px -140px 0px 0px"; 
    menuButton.style.WebkitTransition = "all linear 0.3s";
    menuButton.style.transition = "all linear 0.3s"; 
}