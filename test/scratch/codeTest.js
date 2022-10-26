
scratch({},() => {
    when_greenfalg_clicked(async () => {
        sprite({
            
        }, async () => {
            let a = 0
            when_greenfalg_clicked(async () => {
                a++
                console.log(a)
            })
            console.log("hello")
            
            wait_until(a > 3)
            
            console.log("hi")
            
        })
    })
    
})
