<script>
    import { createEventDispatcher } from 'svelte';
    
    let searchTerms;

    const dispatch = createEventDispatcher();

    function searchBarClick(){
        dispatch('searchBarClick', {
            text: searchTerms,
        });
    }

    const searchKeyPressed = () =>{
        dispatch('searchBarKeyPress', {
            text: searchTerms,
        });
    }
    const searchMauseLeave = () =>{
        dispatch('searchBarMauseLeave', {
            text: "",
        });
    }

    

    $:{
        searchTerms;
    }
</script>

<div class="container">
    <div>
        <h4 class="text-center">Clicca
            <!--o cerca-->la tua provincia per iniziare! </h4>
            <h4 class="text-center">Per le altre zone d'Italia <a href="https://fidas.it/dona-ora/">clicca qui</a>!</h4>
    </div>
    <br>
    <!-- Search Bar -->
    <div class="input-group mb-3" id="search">
        <input bind:value="{searchTerms}" 
        on:mouseleave="{searchMauseLeave}"
        on:keydown="{searchKeyPressed}"
        on:click="{searchBarClick}" type="text" class="form-control" id="searchBar" placeholder="Cerca la tua provincia" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <span class="input-group-text" id="inputButton"><i class="bi bi-search"></i></span>
        </div>
    </div>
</div>

