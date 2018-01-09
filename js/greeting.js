var say_greeting = function(){
    clearall();
    //play_magic_sound();
    var greeting_element = document.getElementById("greeting");
    greeting_element.innerHTML = "hey sexy!";
    setTimeout(clearall, 7000);
}

//say_greeting();
