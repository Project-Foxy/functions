setup({},()=>{
    
obj.save("idle0","./res/character/idle/up/1.png")
//obj.img.load("idle0")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
//obj.style.update("idle0")

obj.save("idle90","./res/character/idle/right/1.png")
//obj.img.load("idle90")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
//obj.style.update("idle90")

obj.save("idle180","./res/character/idle/down/1.png")
//obj.img.load("idle180")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
//obj.style.update("idle180")

obj.save("idle270","./res/character/idle/left/1.png")
//obj.img.load("idle270")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
//obj.style.update("idle270")

obj.clone("character","idle180")
obj.append("character")
forever(()=>{
    if(checkKeys("w")){
        obj.clone("character","idle0")
    }
    if(checkKeys("d")){
        obj.clone("character","idle90")
    }
    if(checkKeys("s")){
        obj.clone("character","idle180")
    }
    if(checkKeys("a")){
        obj.clone("character","idle270")
    }
})

})
