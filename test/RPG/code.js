setup({},()=>{
    
obj.save("idle0","./res/character/idle/up/1.png")
obj.img.load("idle0")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
obj.style.update("idle0")

obj.save("idle90","./res/character/idle/right/1.png")
obj.img.load("idle90")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
obj.style.update("idle90")

obj.save("idle180","./res/character/idle/down/1.png")
obj.img.load("idle180")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
obj.style.update("idle180")

obj.save("idle270","./res/character/idle/left/1.png")
obj.img.load("idle270")
obj.style.color = invisible
obj.style.x = 500
obj.style.y = 500
obj.style.update("idle270")

obj.clone("character","idle180")
obj.addClass("character")
obj.append("character")

let x = 500
let y = 500
let walk = false

forever(()=>{
    if(checkKeys("w")||checkKeys("ArrowUp")){
        obj.clone("character","idle0")
        y -= 10
    }
    if(checkKeys("s")||checkKeys("ArrowDown")){
        obj.clone("character","idle180")
        y += 10
    }
    if(checkKeys("d")||checkKeys("ArrowRight")){
        obj.clone("character","idle90")
        x += 10
    }
    if(checkKeys("a")||checkKeys("ArrowLeft")){
        obj.clone("character","idle270")
        x -= 10
    }
    
    obj.style.x = x
    obj.style.y = y
    obj.addClass("character")
    obj.style.update("character")
    
    let listItem = document.querySelector(".character");

    listItem.parentNode.replaceChild(obj.get("character"),listItem)

})

})
