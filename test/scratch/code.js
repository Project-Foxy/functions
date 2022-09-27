setup({
    pause_button:true
},()=>{

sleep(1)

sprite({
    Costumes:[
        ["img","./../../../StioStudio.github.io/resurser/bilder/Epple.gif"]
    ],
    Sounds:[
        ["snd","none"]
    ],
    Variable:[
        ["hi", 50],
        ["wow", 10]
    ]
},
()=>{
    say(hi)
    say(DNU.Variable)
}
)

})
