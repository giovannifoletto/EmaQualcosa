<script>
    import Footer from '../components/Footer.svelte';
    import Nav from '../components/Nav.svelte';
    import SearchBar from '../components/SearchBar.svelte';
    import Map from '../components/Map.svelte';
    import Content from '../components/Content.svelte';
    import { RegList } from '../store/store';
    
    $: divClass1 = "order-first";
    $: divClass2 = "order-last";

    const toggleMap = () => {
        divClass1 = "order-first";
        divClass2 = "order-last";
    }
    const toggleResearch = () => {
        divClass2 = "order-first";
        divClass1 = "order-last";
    }

    let setContent = $RegList[0];

    const research = (valueToSearch) => {
        try{
            const filteredReg = $RegList.filter(reg => reg.id.toLowerCase().includes(valueToSearch.toLowerCase()));
            
            setContent.id = filteredReg[0].id;
            setContent.name = filteredReg[0].name;
            setContent.regionale = filteredReg[0].regionale;
            setContent.statale = filteredReg[0].statale;
            setContent.info = filteredReg[0].info;
            let countLinks = 0;
            for(let i=0; i<filteredReg[0].links.length;++i){
                setContent.links[countLinks].linkName = filteredReg[0].links[i].linkName;
                setContent.links[countLinks].linkValue = filteredReg[0].links[i].linkValue;
                setContent.links[countLinks].textToBeRendered = filteredReg[0].links[i].textToBeRendered;
                countLinks++;
            }

            if(countLinks > 0 && countLinks <= 2){
                setContent.links[2].linkName = "false";
                setContent.links[2].linkValue = "";
                setContent.links[2].textToBeRendered = "";
                setContent.links[3].linkName = "false";
                setContent.links[3].linkValue = "";
                setContent.links[3].textToBeRendered = "";
            }
        } catch (error){
            if(valueToSearch === "" || valueToSearch === undefined || valueToSearch === null){
                setContent = $RegList[0];
            } else {
                setContent.id = "";
                setContent.name = "Errore nella ricerca, riprovare";
                setContent.regionale = "";
                setContent.statale = "";
                setContent.info = "";
                for(let i=0; i<=3; ++i){
                    setContent.links[i].linkName = "false";
                    setContent.links[i].linkValue = "";
                    setContent.links[i].textToBeRendered = "";
                }
            }
        }
    }

    function handleClickSearchBar(event){
        toggleResearch();
        research(event.detail.text)
        // console.log(event.detail.text);
    }

    // Evento di click sulla regione nella mappa
    const getHovRespEvent = (event) => {
        toggleMap();
        const searchValue = event.detail.text;
        research(searchValue);
        //console.log(setContent);
    }

    const handleKeyPress = (event) => {
        toggleResearch();
        research(event.detail.text);
    }

    const handleMauseLeave = (event) => {
        toggleMap();    
    }

</script>

<Nav />
<div class="container">
    <SearchBar on:searchBarClick={handleClickSearchBar} 
                on:searchBarKeyPress={handleKeyPress}
                on:searchBarMauseLeave={handleMauseLeave}/>
</div>

<br>

<div class="container">
    <div class="row">
      <div class="col-sm {divClass1}">
        <Map on:hovResponseEvent={getHovRespEvent} />
      </div>
      <div class="col-sm {divClass2}">
        <Content 
            {...setContent}
        />
      </div>
    </div>
</div>

<Footer />

<style>
    div {
		font-family: 'Roboto';
		src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap") format("woff");
		font-style: normal;
	}
</style>
