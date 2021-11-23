// console.log("External file executed");

class Queue {
    constructor() {
        this.list = [];
        this.index = 0;
    }

    updateQueue() {
        let c = "";
        for (let i = 0; i < this.index; ++i) {
            c += this.list[i];
        }
        return c;
    }

    push(a) {
        if (typeof(a) != typeof(" ")) {
            throw "Push error, no string given";
        } else {
            this.list.unshift(a);
            this.index++;
            if (this.index > 6) {
                this.list.pop();
                this.index--;
            }
            return "";
        }
    }
}


function purifiedContent(content) {
    let string;
    for (var i = 0; i < content.length; ++i) {
        if (content[i] === "'" || content[i] === '"') {
            string += "\\\'";
        } else {
            string += content[i];
        }
    }
    return string;
}

const Q = new Queue();

function createGroupItemAction() {
    $(`.list-group-item-action`).hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
}

function createDiv(c) {
    const text = `<a href="${c.link}" class="list-group-item list-group-item-action" aria-current="true" id="action-item">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${c.name}</h5>
                    </div>
                    <p class="mb-1">${c.info}</p>
                    <small>Click here to see the informations for this site!</small>
                  </a>`;

    Q.push(text);

    $('#content').html("");
    $('#list-group').html(Q.updateQueue());
    createGroupItemAction();
}

function showPopover(c) {
    let pop;
    if (c.divisione == true) {
        pop = "diviso";
    } else {
        if (c.regionale == true) {
            pop = `<div class="card" id="cards">
        <div class="card-body">
        <h5 class="card-title">${c.name}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
        <p class="card-text">${c.info}</p>
        </div>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item">
                    <a href="${c.linkAspiranti}" class="card-link">Clicca per diventare Donatore!</a>
                </li>
                <li class="list-group-item">
                    <a href="${c.linkDonatori}" class="card-link">Clicca per prenotare la donazione!</a>
                </li>
            </ul>
        </div>`;
        } else {
            pop = `<div class="card" id="cards">
            <div class="card-body">
            <h5 class="card-title">${c.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Modulo Nazionale</h6>
            <p class="card-text">${c.info}</p>
            </div>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <a href="${c.linkAspiranti}" class="card-link">Clicca per diventare Donatore!</a>
                    </li>
                    <li class="list-group-item">
                        <a href="${c.linkDonatori}" class="card-link">Clicca per prenotare la donazione!</a>
                    </li>
                </ul>
            </div>`;
        }
    }
    $(c.id).popover({
        html: true,
        title: "",
        content: pop
    });
    $(c.id).popover('show');
}

function createHover(a) {
    $(a.id).hover(
        function() {
            createDiv(a);
            showPopover(a);
            $(a.id).css('opacity', '50%');
        },
        function() {
            $(a.id).css("opacity", "100%");
            setTimeout(function() {
                $(a.id).popover('hide');
            }, 1500);

        }
    );
}

function createAllHover() {
    let idList = {
        "el1": {
            "id": "#Rimini",
            "name": "Rimini",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale."
        },
        "el2": {
            "id": "#Rimini-ForliCesena",
            "name": "Rimini Forlì Cesena",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el3": {
            "id": "#Ravenna",
            "name": "Ravenna",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el4": {
            "id": "#Ferrara",
            "name": "Ferrara",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el5": {
            "id": "#Bologna",
            "name": "Bologna",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el6": {
            "id": "#Modena",
            "name": "Modena",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el7": {
            "id": "#ReggioEmilia",
            "name": "Reggio Emilia",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el8": {
            "id": "#Parma",
            "name": "Parma",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el9": {
            "id": "#Piacenza",
            "name": "Piacenza",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el10": {
            "id": "#Pavia",
            "name": "Pavia",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el11": {
            "id": "#Milano-Lodi",
            "name": "Milano e Lodi",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el12": {
            "id": "#Cremona-Mantova",
            "name": "Cremona e Mantova",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el13": {
            "id": "#Brescia",
            "name": "Brescia",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el14": {
            "id": "#Bergamo",
            "name": "Bergamo",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el15": {
            "id": "#Como-Lecco-MonzaBrianza",
            "name": "Como, Lecco e Monza-Brianza",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el16": {
            "id": "#Varese",
            "name": "Varese",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el17": {
            "id": "#Sondrio",
            "name": "Sondrio",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el18": {
            "id": "#Bolzano",
            "name": "Bolzano",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el19": {
            "id": "#Trento",
            "name": "Trento",
            "info": "Informazioni per la zona del Primiero e chi si appoggia a Feltre come ospedale",
            "linkAspiranti": "https://docs.google.com/forms/d/e/1FAIpQLSeRG1rvz0OPpsVuUMR7JGXAw3XujX3E7jsz1TwYvTeerE1K8w/viewform?usp=sf_link",
            "linkDonatori": "https://www.ulssfeltre.veneto.it/AriannaCup/PortaleCittadinoWeb/WebForms/ScegliPrenotazione.aspx"
        },
        "el20": {
            "id": "#Verona",
            "name": "Verona",
            "info": "Qualche informazione utile",
            "linkAspiranti": "fidasverona.it/it/vorrei-diventare-donatore",
	    "linkDonatori": "https://www.fidasverona.it/it/vorrei-prenotare-la-donazione"
        },
        "el21": {
            "id": "#Vicenza",
            "name": "Vicenza",
            "info": "Qualche informazione utile",
            "linkAspiranti": "https://docs.google.com/forms/d/e/1FAIpQLSeN5Po_FS4or8FfKS2u-mjCZAbRu1TEz-tBEtvceLJUkj3nWQ/viewform",
	    "linkDonatori": "https://www.fidasverona.it/it/vorrei-prenotare-la-donazione"
        },
        "el22": {
            "id": "#Padova",
            "name": "Padova",
            "info": "Per iscriverti premi qui. ",
            "linkAspiranti": "https://form.jotform.com/212316458894363",
            "linkDonatori": "https://docs.google.com/forms/d/e/1FAIpQLSeGcD5qFaPXhUjzRZtD3A1cNCQMNxlFngAOq-rmAIx6cF-Pfw/viewform?usp=sf_link"
        },
        "el23": {
            "id": "#Rovigo",
            "name": "Rovigo",
            "info": "Per diventare donatore o prenotare la donazione clicca qui",
            "linkAspiranti": "https://docs.google.com/forms/d/e/1FAIpQLSet0hVtdq_CdZYyvZFUDtj3sOWGd7-U1aIf4K3Ppd0KftW49A/viewform?usp=sf_link",
	    "linkDonatori": "https://docs.google.com/forms/d/e/1FAIpQLSet0hVtdq_CdZYyvZFUDtj3sOWGd7-U1aIf4K3Ppd0KftW49A/viewform?usp=sf_link"
        },
        "el24": {
            "id": "#Treviso",
            "name": "Treviso",
            "info": "Per diventare donatore o prenotare la donazione clicca qui",
	    "linkAspiranti": "https://docs.google.com/forms/d/e/1FAIpQLSfehHxfzrq8cI8upXafRSYz_tsdHjBrJP_jZqdVZFCMYs7dSg/viewform?usp=sf_link",
	    "linkDonatori": "https://docs.google.com/forms/d/e/1FAIpQLSfehHxfzrq8cI8upXafRSYz_tsdHjBrJP_jZqdVZFCMYs7dSg/viewform?usp=sf_link"
        },
        "el25": {
            "id": "#Belluno",
            "name": "Belluno",
            "info": "Per diventare donatore o prenotare la donazione clicca qui",
            "link": "https://example.com",
            "divisione": true
        },
        "el26": {
            "id": "#Pordenone",
            "name": "Pordenone",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el27": {
            "id": "#Udine",
            "name": "Udine",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el28": {
            "id": "#Venezia2",
            "name": "Venezia",
            "info": "Qualche informazione utile",
            "link": "https://example.com",
        },
        "el29": {
            "id": "#Venezia1",
            "name": "Venezia",
            "info": "Qualche informazione utile",
            "link": "https://example.com",
        },
        "el30": {
            "id": "#Venezia3",
            "name": "Venezia",
            "info": "Qualche informazione utile",
            "link": "https://example.com",
        },
        "el31": {
            "id": "#Gorizia2",
            "name": "Gorizia",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        },
        "el32": {
            "id": "#Gorizia",
            "name": "Gorizia",
            "linkDonatori": "https://fidas.it/dona-ora/",
            "linkAspiranti": "https://fidas.it/dona-ora/",
            "info": "Non sono ancora disponibili informazioni più attendibili. Consultare il sito nazionale.",
            "divisione": false,
            "regionale": true
        }
    };
    for (let key in idList) {
        //console.log(idList[key]);
        createHover(idList[key]);
    }
}

$(document).ready(() => {
    //console.log("Document ready");
    // Set map width
    var page = $("windows").width();
    $('#svgMap').width(page);
    $('#svgMap').height(page);
    //console.log("Ciao sto eseguendo da index.js");

    createAllHover();
});