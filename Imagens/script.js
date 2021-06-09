var menus = document.querySelector(".menus");

menus.addEventListener("click", function(){
    document.querySelector(".Container").classList.toggle("show-menu");
});
menus.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
});