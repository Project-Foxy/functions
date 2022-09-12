setup({},()=>{

let abc = "0123456789abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ_ "

let password = "mine_craft"
let pinCode = 1234

password = password.split("")

let output = []

repeat(password.length,(e)=>{
    output.push(abc.indexOf(password[e]))
})

repeat(output.length,(e)=>{
    let a = output[e]

    a = a + pinCode
    a = a * a
    a = a / pinCode
    a = sqrt(a)

    a = a * 100
    a = floor(a)
    
    output[e] = a
})

let out = []

repeat(output.length,(e)=>{
    
    let a = output[e]

    repeat(output.length,(c)=>{
        a = a + output[mod(c, output.length)]
    })
    
    a = mod(a,abc.length)
    a = abc[a]
    
    out.push(a)

})

say(arrayToString(out))


})

