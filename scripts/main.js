document.getElementById("main_nav_button").addEventListener('click', function () {
    let collapseButton = document.getElementById("main_nav");
    if (collapseButton.className === "header-nav") collapseButton.className += " responsive";
    else collapseButton.className = "header-nav";
});