window.addEventListener("scroll",function(){
    let menuArea = document.getElementById("menu-area");
    let scrollTop = document.getElementById("scrollTop");
    if(window.pageYOffset > 0){
        menuArea.classList.add("menu_class");
        scrollTop.classList.add("scroll_show");
    }
    else{
        menuArea.classList.remove("menu_class");
        scrollTop.classList.remove("scroll_show");

    }
    // scrollTop.classList.toggle("scroll_show",window.scrollY > 200)
    // menuArea.classList.toggle("menu_class",window.scrollY > 100)
});
function goToTop(){
    window.scrollTo({
        top: 0,
        behavior : 'smooth'
    })
}