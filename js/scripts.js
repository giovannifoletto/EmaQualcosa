class Queue {
    /*
    Classe per implementare una coda, necessaria per lo scorrere lineare del carousello delle informazioni.
    Implementazione di base con solo i metodi necessari.
    MAX_VALUE indica il massimo valore di elementi nel carousello laterale.
    */
    constructor() {
        this.list = [];
        this.index = 0;
        // per modificare il numero di elementi nel carousello laterale modificare questa variabile
        const MAX_VALUE = 6;
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
            if (this.index > MAX_VALUE) {
                this.list.pop();
                this.index--;
            }
            return "";
        }
    }
}

// Costruisco la Queue
const Q = new Queue();

// per creare il popover con le informazioni in createDiv
function createGroupItemAction() {
    $(`.list-group-item-action`).hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
}

// funzione per inserire il carousello delle informazioni mobile a fianco della cartina.
// Questa funzione utilizza la queue per mantenere il numero di elementi laterali costanti, fare
// riferimento alla classe Queue sopra per altre informazioni
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

// permette la visione dei popover, utilizzando le funzioni per crearli definite sopra
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

// funzione per creare popover e distruggerli dopo un lasso di tempo variabile definito sotto
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

// Class Reg to support json decoding
class Reg {
    id;
    name;
    linkDonatori;
    linkAspiranti;
    info;
    divisione;
    regionale;
    // costruttore a partire da valore json
    constructor(a) {
        this.id = a.id;
        this.name = a.name;
        this.linkDonatori = a.linkDonatori;
        this.linkAspiranti = a.linkAspiranti;
        this.info = a.info;
        this.divisione = a.divisione ? a.divisione : false;
        this.regionale = a.regionale ? a.regionale : false;
    }

}
let jsonData = [];

function createAllHover() {

    $.getJSON("http://localhost:5500/data/regioni.json", function(json) {
        for (let key in json) {
            jsonData.push(new Reg(json[key]));
        }
    });
    console.log(jsonData);
    for (let key in jsonData) {
        //console.log(idList[key]);
        createHover(key);
    }
}

// starter function
$(document).ready(() => {
    //console.log("Document ready");
    // Set map width
    var page = $("windows").width();
    $('#svgMap').width(page);
    $('#svgMap').height(page);
    //console.log("Ciao sto eseguendo da index.js");

    createAllHover();
});