
////////////////////////////////

let input = {
    Costumes:[
        ["hi",document.createElement("div")],
        ["img",LoadImage("./../../../StioStudio.github.io/resurser/bilder/Epple.gif")]
    ],
    Sounds:[
        ["snd","none"]
    ],
    Variable:[
        ["hi", 50],
        ["wow", 10]
    ]
}

////////////////////////////////

let LDNU = {
    rem_element_character:undefined,
    Costumes:{
        name:[],
        obj:[],
    },

    Sounds:{
        name:[],
        obj:[],
    },

    Variable:{
        name:[],
        obj:[],
    },
    Character: document.createElement("div")
}

repeat(input.Variable.length,(e)=>{
    let rem_a = input.Variable[e]
    
    LDNU.Variable.name.push(rem_a[0])
    LDNU.Variable.obj.push(rem_a[1])
})


repeat(input.Costumes.length,(e)=>{
    let rem_a = input.Costumes[e]

    LDNU.Costumes.name.push(rem_a[0])
    LDNU.Costumes.obj.push(rem_a[1])
})


let x = "500px"
let y = "500px"
let sprite_name = "Sprites"

LDNU.Character.id = sprite_name
LDNU.Character.style.position = "absolute"
LDNU.Character.style.height = "100px"
LDNU.Character.style.width = "100px"
LDNU.Character.style.backgroundColor = rgb(255,0,0)
append(LDNU.Character)

function switch_costume_to(costume){
    if(costume instanceof Number){
        LDNU.Character = LDNU.Costumes.obj[costume]
    }
    else{
        LDNU.Character = LDNU.Costumes.obj[LDNU.Costumes.name.indexOf(costume)]
    }
}

switch_costume_to(2)

/////////////////////////////////

forever(()=>{
    x = mouse_page_X-50+"px"
    y = mouse_page_Y-50+"px"
    if(checkKeys("a")){
        switch_costume_to(0)
    }
    else{
        switch_costume_to("hi")
    }
    
})

/////////////////////////////////

forever(()=>{
    LDNU.Character.style.left = x
    LDNU.Character.style.top = y
    LDNU.Character.id = sprite_name
    LDNU.Character.style.position = "absolute"
    LDNU.Character.style.height = "100px"
    LDNU.Character.style.width = "100px"
    LDNU.Character.style.backgroundColor = rgb(255,0,0)

    replace(document.getElementById(sprite_name),LDNU.Character)
})

