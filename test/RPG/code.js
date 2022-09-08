setup({},()=>{
    
obj.save("idle0","./res/character/idle/up/1.png")
obj.img.load("idle0")

obj.save("idle90","./res/character/idle/right/1.png")
obj.img.load("idle90")

obj.save("idle180","./res/character/idle/down/1.png")
obj.img.load("idle180")

obj.save("idle270","./res/character/idle/left/1.png")
obj.img.load("idle270")

obj.clone("character","idle180")
obj.append("character")


obj.clone("character","idle180")
let player_X = 500
let player_Y = 500
eventer.send("Start - Game Loop")


})