

function goToPartInString(part,start,_text){
    let counter = start
    while(!(_text[counter] == part)){
        counter++
    }
    return(counter)
}

function skipStartFunction (_func){

    let rem = String(_func)
    let counter = 0
    counter = goToPartInString(")",counter,rem)
    counter = goToPartInString("=",counter,rem)
    counter = goToPartInString(">",counter,rem)
    counter = goToPartInString("{",counter,rem)
    
    counter++
    return(counter)

}

function sprite(rem, _func){


    let func = String(_func)
    let counter = skipStartFunction(func)
    
    append(DNU.Character)
    
    forever(()=>{
        DNU.Character.parentNode.replaceChild(DNU.Costumes.obj[DNU.Costumes.active],DNU.Character)
    })

    func = func.add(counter,`
    
    `)

    repeat(rem.Variable.length,(e)=>{
        let rem_a = rem.Variable[e]
        
        DNU.Variable.name.push(rem_a[0])
        DNU.Variable.obj.push(rem_a[1])

        func = func.add(counter,`
        let ${rem_a[0]} = ${rem_a[1]}
        `)
    })
    
    repeat(rem.Costumes.length,(e)=>{
        let rem_a = rem.Costumes[e]
        
        DNU.Costumes.name.push(rem_a[0])
        DNU.Costumes.obj.push(rem_a[1])
    })

    eval(func)()

}

let DNU = {
    Costumes:{
        name:[],
        obj:[],
        active:0
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

/**Motion */

function move(steps){
    say("move is work in progress")
}

function turn(degrees){
    say("turn is work in progress")
}

function go_to_PS(placeOrSprite){
    say("goTo is work in progress")
}

function go_to(x,y){
    say("goTo is work in progress")
}

function glide_PS(sec,placeOrSprite){
    say("glidePS is work in progress")
}

function glide(sec,x,y){
    say("glide is work in progress")
}

function point_in_direction(degrees){
    say("pointInDirection is work in progress")
}

function point_towards(placeOrSprite){
    say("pointTowards is work in progress")
}

function change_x_by(x){
    say("changeXBy is work in progress")
}

function set_x_to(x){
    say("setXTo is work in progress")
}

function change_y_by(y){
    say("changeYBy is work in progress")
}

function set_y_to(y){
    say("setYTo is work in progress")
}

function if_on_edge_bounce(){
    say("ifOnEdgeBounce is work in progress")
}

function set_rotation_style(type){
    say("setRotationStyle is work in progress")
}

let xPosition = 0
let yPosition = 0
let direction = 0

/**Look */

function switch_costumes_to(costumes){
    if(costumes instanceof Number){
        DNU.Costumes.active[costumes]
    }
    else{
        DNU.Costumes.active[DNU.Costumes.name.indexOf(costumes)]
    }
}
