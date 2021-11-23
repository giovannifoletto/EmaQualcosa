class Queue {
    /*
    Classe per implementare una coda, necessaria per lo scorrere lineare del carousello delle informazioni.
    Implementazione di base con solo i metodi necessari.
    MAX_VALUE indica il massimo valore di elementi nel carousello laterale.
    */
   list: Array<any>;
   index: number;

    // per modificare il numero di elementi nel carousello laterale modificare questa variabile
    static MAX_VALUE : number = 6;
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
            if (this.index > Queue.MAX_VALUE) {
                this.list.pop();
                this.index--;
            }
            return "";
        }
    }
}

class Reg {
    id: string;
    name: string;
    linkDonatori: URL;
    linkAspiranti: URL;
    info: string;
    divisione: boolean;
    regionale: boolean;
    // costruttore a partire da valore json
    constructor(a: any) {
        this.id = a.id;
        this.name = a.name;
        this.linkDonatori = a.linkDonatori;
        this.linkAspiranti = a.linkAspiranti;
        this.info = a.info;
        this.divisione = a.divisione ? a.divisione : false;
        this.regionale = a.regionale ? a.regionale : false;
    }
}

let jsonData : Array<Reg>;

function readJSON(){
    const json = $.getJSON("/data/regioni.json", function(o){
        jsonData.push(new Reg(o));
    });
    
};

$(function(){
    readJSON();
    $("#test").html(() => {
        for(let key:any in jsonData){
            key.toString();
        }
    }());
});