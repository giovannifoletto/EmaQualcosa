import {idList, returnValue} from "./header"


function modifyMapSize(){
    var page = $("windows").width();
    $('#svgMap').width(page);
    $('#svgMap').height(page);
}

function createPopOver(a: any){
    const pop = returnValue(a);
    $(a.id).popover({
        html: true,
        title: "",
        content: pop
    });
    $(a.id).popover('show');
}

function hoveringEffectMap(){
    // Create overing opacity effect
    // Create lateral div-card

    for (let key in idList) {
        $(idList[key].id).hover(
            () => {
                createPopOver(this);
                $(this).css('opacity', '50%');
            }, () => {
                console.log("Ciao");
            }
        );
    }
}



export function main(){
    modifyMapSize();
}