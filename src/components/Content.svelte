<script>
    export let name = "Per iniziare premere una regione o utilizzare la barra di ricerca";
    export let regionale = false;
    export let statale = false;
    export let info = "";
    export let links = [];
    $:{
        name+regionale+statale+info+links;
    }
</script>

<div class="card text-center">
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
            {#if regionale === true}
                <h6 class="card-subtitle mb-2 text-muted">Link Regionale</h6>  
            {/if}
            {#if statale === true }
                <h6 class="card-subtitle mb-2 text-muted">Link Nazionale</h6>  
            {/if}
        <p class="card-text">{info}</p>
        {#each links as l}
            {#if l.linkName !== "false"}
            <a href="{l.linkValue}" class="btn btn-outline-danger text-wrap" style="margin:1px">{l.textToBeRendered}</a>
            {/if}
        {/each}
    </div>
</div>

