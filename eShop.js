let navigation = document.querySelector(".navigation"),
    menu = navigation.querySelector(".menu_responsive"),
    croix = navigation.querySelector(".navigation ul .close_nav"),
    menu_nav = navigation.querySelector("ul");


    menu.addEventListener('click', myfun1, false)
    function myfun1(){
        navigation.classList.add("active");
    }



    croix.addEventListener('click', myfun2, false)
    function myfun2(){
        navigation.classList.remove("active");
    }

