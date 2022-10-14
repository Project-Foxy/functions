
sprite({},async()=>{
    let a = 0
    when_greenfalg_clicked(async ()=>{
        a++
        console.log(a)
    })
    console.log("hello")

    await new Promise((resolve) => {
        const update = ()=>{
            if(a >= 4)resolve()
            requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
    })
    
    console.log("hi")

})
