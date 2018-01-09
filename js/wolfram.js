function getwolfram(input){
        clearall();
        play_magic_sound();
        //alert("dodo");
        var wolframapicall = "https://api.wolframalpha.com/v1/spoken?appid=G5XHT5-5EW648YL5Y&i=" + input + "&units=metric";

        $.get(wolframapicall, wolframcallback);

        function wolframcallback(wolframans){
            console.log("success");
            //alert(wolframans);
            var mirror_question = document.getElementById("mirrorquestion");
                mirror_question.innerHTML = input;
            var mirror_answer = document.getElementById("mirroranswer");
                mirror_answer.innerHTML = wolframans;
        }

        setTimeout(clearall, 60000);
}



//getwolfram("define information");
