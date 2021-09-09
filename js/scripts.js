// console.log("External file executed");

$(document).ready( () =>{
    console.log("Document ready");
    // Set map width
    var page = $("windows").width();
    $('#svgMap').width(page/2);
    $('#svgMap').height(page/2);
    console.log("Ciao sto eseguendo da index.js");
    // setOpacityValues();
});

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


function createPopHoverAndDiv(content){
    const page = $('windows').width();
    // if(page >= 512){
    //     // div too
    // }
    const popover = '<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="'+purifiedContent(content)+'">Dismissible popover</a>';


}

function createHover(a){
    $(a).hover( 
        function() {

            $(a).css('opacity', '50%')
        }, 
        function(){ 
            $(a).css("opacity", "100%")
        } 
    );
}