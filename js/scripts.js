import { idList } from './header.js';

function createContent(a) {
    const card = ``
    `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${a.name}</h5>
            <p class="card-text">${a.info}</p>
            <a href="${a.linkDonatori}" class="btn btn-primary">Clicca qui per prenotare la tua donazione!</a>
            <a href="${a.linkAspiranti}" class="btn btn-primary">Clicca qui per diventare donatore!</a>
        </div>
     </div>`
    ``;
    $("#mapContent").html(card);
}

function showPopover(c) {
    let pop;
    if (c.divisione == true) { // BELLUNO to DO
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
                    <a href="${c.linkAspirantiFeltre}" class="card-link">Clicca per diventare Donatore a Feltre!</a>
                </li>
                <li class="list-group-item">
                    <a href="${c.linkDonatoriFeltre}" class="card-link">Clicca per prenotare la donazione a Feltre!</a>
                </li>
                <li class="list-group-item">
                    <a href="${c.linkAspirantiBelluno}" class="card-link">Clicca per diventare Donatore a Belluno!</a>
                </li>
                <li class="list-group-item">
                    <a href="${c.linkDonatoriBelluno}" class="card-link">Clicca per prenotare la donazione a Belluno!</a>
                </li>
            </ul>
        </div>`;
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
    /*
        Questa funzione serve a gestire gli eventi quando si passa sopra la provincia
        - cambiamento di opacità per il colore della regione
        - funzione popover con timeout ?
    */
    var active;
    $(a.id).hover(
        function() {
            if (a.id != active) {
                $(active).popover('hide');
            }
            active = a.id;
            showPopover(a);
            $(this).css('opacity', '50%');
        },
        function() {
            $(this).css("opacity", "100%");
            if (active == a.id) {
                $(a.id).popover('hide');
            }
        }
    );
}

function createClick(a) {
    let content = "";
    if (a.divisione != true) {
        content = `<div class="card" id="move">
        <div class="card-body">
            <h5 class="card-title">${a.name}</h5>
            <p class="card-text">${a.info}</p>
            <div class="container text-center">
                    <a href="${a.linkDonatori}" class="btn btn-primary" style="margin:1px">Clicca qui per prenotare la tua donazione!</a>
                    <a href="${a.linkAspiranti}" class="btn btn-primary" style="margin:1px">Clicca qui per diventare donatore!</a>
                </div>
            </div>
        </div>
     </div>`;
    } else {
        content = `<div class="card" id="move">
    <div class="card-body">
        <h5 class="card-title">${a.name}</h5>
        <p class="card-text">${a.info}</p>
        <div class="container text-center">
                <a href="${a.linkDonatoriFelte}" class="btn btn-primary" style="margin:1px">Clicca qui per prenotare la tua donazione a Feltre!</a>
                <a href="${a.linkAspirantiFeltre}" class="btn btn-primary" style="margin:1px">Clicca qui per diventare donatore a Feltre!</a>
                <a href="${a.linkDonatoriBelluno}" class="btn btn-primary" style="margin:1px">Clicca qui per prenotare la tua donazione a Belluno!</a>
                <a href="${a.linkDonatoriBelluno}" class="btn btn-primary" style="margin:1px">Clicca qui per diventare donatore a Belluno!</a>
            </div>
        </div>
    </div>
 </div>`;
    }
    $(a.id).click(function() {
        $("#mapContent").html(content);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#move").offset().top
        }, 1000);
    });
}

// insert event handler for HOVERING in the maps regions
// inserti event handler for CLICK on map region
function createAllHover() {
    for (let key in idList) {
        //console.log(idList[key]);
        createHover(idList[key]);
        createClick(idList[key]);
    }
}

function inizializeInput() {
    var s = "";
    $("#searchBar").keypress(e => {
        if (e.which == 13) {
            eventSubmit(s);
            s = "";
            $("#searchBar").val("");
        } else {
            s += String.fromCharCode(e.which);
        }
    });
}
/*
function findValue(s) {
    $.each(idList, (e) => {
        if (e.name === s) {
            return true;
        } else {
            return false;
        }
    });
}

// funzione per la ricerca
function eventSubmit(s) {

    if (findValue(s) == true) {
        const card = ``
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${a.name}</h5>
                <p class="card-text">${a.info}</p>
                <a href="${a.linkDonatori}" class="btn btn-primary">Clicca qui per prenotare la tua donazione!</a>
                <a href="${a.linkAspiranti}" class="btn btn-primary">Clicca qui per diventare donatore!</a>
            </div>
         </div>`
        ``;
        $("#mapContent").html(card);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#move").offset().top
        }, 1000);
    } else {
        let content = `<div class="card" id="move">
        <div class="card-body">
            <p class="card-text">Non Sono state trovate informazioni per la provincia cercata!</p>
            <p class="card-text">Provare il <a href='https://fidas.it'>sito nazionale</a>.</p>
     </div>`;
        $("#mapContent").html(content);
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#move").offset().top
        }, 1000);
    }
}*/

$(document).ready(() => {
    //console.log("Document ready");
    // Set map width
    var page = $("windows").width();
    $('#svgMap').width(page);
    $('#svgMap').height(page);
    //console.log("Ciao sto eseguendo da index.js");
    inizializeInput();
    createAllHover();
});