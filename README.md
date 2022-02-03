# Documentations and Infos

Nella repository sono disponibili diversi file, divisi in queste sottocartelle:
- 

## DATA and DATA FORMAT NEEDED
```json
list = [
    {
        "id" : string,      // id value of the path => needed for the reaction at the event
        "name" : string,    // Name of the Region
        "regionale" : bool, // if the site is regional 
        "statale" : bool,   // if the site is the national one
        "info" : string,    // info to display if needed
        "links" : [         // array of links
            {
                "linkName" : string,         // name of the link (aspirante/donatore)
                "linkValue" : string,        // link's URL
                "textToBeRendered" : string, // content of the action's button of this link 
            }, {
                "linkName" : string,         // same as over
                "linkValue" : string,
                "textToBeRendered" : string
            }
        ]
    }
]
```