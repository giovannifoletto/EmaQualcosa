import {Queue} from "./header";
import {main} from "./activeListeners";

const Q = new Queue;

$(document).ready((function(){
    main();
}));