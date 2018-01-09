function getwiki(input){
        clearall();
        play_magic_sound();
       //alert("wiki runs")
        var wikiapicall = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json&callback=?";
        
        $.getJSON(wikiapicall, wikicallback);
        
        function wikicallback(wikidata){
            console.log(wikidata);
            //alert (wikidata[2][0]);
            var wiki_title = document.getElementById("wikititle");
                wiki_title.innerHTML = wikidata[1][0];
            var wiki_answer = document.getElementById("wikianswer");
                wiki_answer.innerHTML = wikidata[2][0];
            var wiki_source = document.getElementById("wikisource");
                wiki_source.innerHTML = wikidata[3][0];
        }
    
        setTimeout(clearall, 60000);
}
    
//getwiki("kore");