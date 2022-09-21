setup({
    pause_button:true
},()=>{



obj.save("idle0","./res/character/idle/up/1.png")
obj.img.load("idle0")
obj.addClass("character")
obj.style.update("idle0","class")
forever(()=>{
    obj.style.height = 100
    obj.style.width = 90
    obj.style.update("idle0", "position", "width", "height")
})

obj.save("idle90","./res/character/idle/right/1.png")
obj.img.load("idle90")
obj.addClass("character")
obj.style.update("idle90","class")
forever(()=>{
    obj.style.height = 100
    obj.style.width = 70
    obj.style.update("idle90", "position", "width", "height")
})

obj.save("idle180","./res/character/idle/down/1.png")
obj.img.load("idle180")
obj.addClass("character")
obj.style.height = 100
obj.style.width = 90
obj.style.update("idle180", "class", "position", "width", "height")
forever(()=>{
    obj.style.height = 100
    obj.style.width = 90
    obj.style.update("idle180", "position", "width", "height")
})

obj.save("idle270","./res/character/idle/left/1.png")
obj.img.load("idle270")
obj.addClass("character")
obj.style.update("idle270","class")
forever(()=>{
    obj.style.height = 100
    obj.style.width = 70
    obj.style.update("idle270","position", "width", "height")
})

//variables
let character = obj.get("idle180")
let player_X = 500
let player_Y = 500
let joy_X = 0
let joy_Y = 0
let joy_dist = 0
let player_dir = 0
let frame = 0
let base_costume = 0
let player_custom = 0

switchCus("idle180")

append(character)

eventer.send("Start - Game Loop")

function switchCus(custom){
    character = obj.get(custom)
    player_custom = obj.objName.indexOf(custom)
}

eventer.listen("Stop - Game Loop",{

})

eventer.listen("Start - Game Loop",()=>{
    forever(()=>{
        eventer.send("Tick - Player")
        eventer.send("Paint - Player")
    })
})

eventer.listen("Tick - Player",()=>{
    player_Contols()
    if(joy_dist>0){
        player_movement()
    }
    else{

    }

})

function player_movement(){
    if(joy_dist>1){
        joy_dist = 1.25
    }
    joy_X = joy_X/joy_dist
    joy_Y = joy_Y/joy_dist
    try_move(joy_X*5, joy_Y*5)
    if(joy_X<0){
        player_dir = 270
    }
    else{
        if(joy_X>0){
            player_dir = 90
        }
        else{
            if(joy_Y>0){
                player_dir = 180
            }
            else{
                player_dir = 0
            }                    
        }    
    }
    switchCus(join("idle",player_dir))
    base_costume = player_custom
    frame+=0.3
}

function try_move(dx, dy){
    player_X += dx
    player_Y += dy
}

function player_Contols(){
    joy_X = checkKeys("ArrowRight", "d")
    joy_X -= checkKeys("ArrowLeft", "a")
    joy_Y = checkKeys("ArrowDown", "s")
    joy_Y -= checkKeys("ArrowUp", "w")

    joy_dist = sqrt((joy_X*joy_X)+(joy_Y*joy_Y))
}

eventer.listen("Paint - Player",()=>{

    obj.style.x = player_X
    obj.style.y = player_Y
    obj.save("character",character)
    obj.style.update("character", "x", "y")
    switchCus("character")
    obj.replace( getElement(".character"), character )

})

eventer.send("Start - Game Loop")

})