// console.log("External file executed");

function purifiedContent(content){
    let string;
    for(var i=0; i <= content.length; ++i){
        if(content[i] === "'" || content[i] === '"'){
            string+="\\\'";
        } else{
            string += content[i];
        }
    }
    return string;
}


function createPopHoverAndDiv(c){
    const text = `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${c.name}</h5>
                    <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                    <p class="card-text">${c.info}</p>
                    <a href="#" class="card-link">${c.link}</a>
                    <!-- <a href="#" class="card-link">Another link</a> -->
                    </div>
                </div>`;
    $('#content').html(text);
    $(c.id).popover({ 
        html: true,
        title: "<span class='booked'>This is booked</span>", 
        content: text 
      });
}

function createHover(a){
    $(a.id).hover(
        function() {
            createPopHoverAndDiv(a);
            $(a.id).css('opacity', '50%')
        },
        function(){
            $(a.id).css("opacity", "100%")
        }
    );
}


function createAllHover(){
    let idList = {
            "el1" : {
                "id": "#Rimini",
                "name": "Rimini",
                "info": "Qualche informazione su questo posto",
                "link": "https://example.com"
            },
            "el2" : {
                "id": "#Rimini-ForliCesena",
                "name": "Rimini Forlì Cesena",
                "info": "Qualche informazione su questo posto",
                "link": "https://example.com"
            },
            "el3" : {
                "id" : "#Ravenna",
                "name": "Ravenna",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el4" : {
                "id" : "#Ferrara",
                "name": "Ferrara",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el5" : {
                "id" : "#Bologna",
                "name": "Bologna",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el6" : {
                "id" : "#Modena",
                "name": "Modena",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el7" : {
                "id" : "#ReggioEmilia",
                "name": "Reggio Emilia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el8" : {
                "id" : "#Parma",
                "name": "Parma",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el9" : {
                "id" : "#Piacenza",
                "name": "Piacenza",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el10" : {
                "id" : "#Pavia",
                "name": "Pavia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el11" : {
                "id" : "#Milano-Lodi",
                "name": "Milano e Lodi",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el12" : {
                "id" : "#Cremona-Mantova",
                "name": "Cremona e Mantova",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el13" : {
                "id" : "#Brescia",
                "name": "Brescia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el14" : {
                "id" : "#Bergamo",
                "name": "Bergamo",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el15" : {
                "id" : "#Como-Lecco-MonzaBrianza",
                "name": "Como, Lecco e Monza-Brianza",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el16" : {
                "id" : "#Varese",
                "name": "Varese",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el17" : {
                "id" : "#Sondrio",
                "name": "Sondrio",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el18" : {
                "id" : "#Bolzano",
                "name": "Bolzano",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el19" : {
                "id" : "#Trento",
                "name": "Trento",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el20" : {
                "id" : "#Verona",
                "name": "Verana",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el21" : {
                "id" : "#Vicenza",
                "name": "Vicenza",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el22" : {
                "id" : "#Padova",
                "name": "Padova",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el23" : {
                "id" : "#Rovigo",
                "name": "Rovigo",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el24" : {
                "id" : "#Treviso",
                "name": "Treviso",
                "info": "Qualche informazione utile",
                "link" : "https://example.com"
            },
            "el25" : {
                "id" : "#Belluno",
                "name": "Belluno",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el26" : {
                "id" : "#Pordenone",
                "name": "Pordenone",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el27" : {
                "id" : "#Udine",
                "name": "Udine",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el28" : {
                "id" : "#Venezia2",
                "name": "Venezia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el29" : {
                "id" : "#Venezia1",
                "name": "Venezia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el30" : {
                "id" : "#Venezia3",
                "name": "Venezia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el31" : {
                "id" : "#Gorizia2",
                "name": "Gorizia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
            },
            "el32" : {
                "id" : "#Gorizia",
                "name": "Gorizia",
                "info": "Qualche informazione utile",
                "link" : "https://example.com",
        }
    };
    for(let key in idList){
        //console.log(idList[key]);
        createHover(idList[key]);
    }
}

$(document).ready( () =>{
    console.log("Document ready");
    // Set map width
    var page = $("windows").width();
    $('#svgMap').width(page/2);
    $('#svgMap').height(page/2);
    console.log("Ciao sto eseguendo da index.js");
    
    createAllHover();
});
