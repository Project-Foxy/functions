setup({
    pause_button:true,
},()=>{

sleep(1)

////////////////////////////////

let vari = {
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

let DNU = {
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

repeat(vari.Variable.length,(e)=>{
    let rem_a = vari.Variable[e]
    
    DNU.Variable.name.push(rem_a[0])
    DNU.Variable.obj.push(rem_a[1])
})


repeat(vari.Costumes.length,(e)=>{
    let rem_a = vari.Costumes[e]

    DNU.Costumes.name.push(rem_a[0])
    DNU.Costumes.obj.push(rem_a[1])
})


let x = "500px"
let y = "500px"
let name = "Sprites"

DNU.Character.id = name
DNU.Character.style.position = "absolute"
DNU.Character.style.height = "100px"
DNU.Character.style.width = "100px"
DNU.Character.style.backgroundColor = rgb(255,0,0)
append(DNU.Character)

function switch_costume_to(costume){
    if(costume instanceof Number){
        DNU.Character = DNU.Costumes.obj[costume]
    }
    else{
        DNU.Character = DNU.Costumes.obj[DNU.Costumes.name.indexOf(costume)]
    }
}

switch_costume_to(0)

/////////////////////////////////

forever(()=>{
    x = mouse_page_X-50+"px"
    y = mouse_page_Y-50+"px"
    if(checkKeys("a")){
        switch_costume_to("img")
    }
    else{
        switch_costume_to("hi")
    }
})

/////////////////////////////////

forever(()=>{
    DNU.Character.style.left = x
    DNU.Character.style.top = y
    DNU.Character.id = name
    DNU.Character.style.position = "absolute"
    DNU.Character.style.height = "100px"
    DNU.Character.style.width = "100px"
    DNU.Character.style.backgroundColor = rgb(255,0,0)

    replace(document.getElementById(name),DNU.Character)
})


})
