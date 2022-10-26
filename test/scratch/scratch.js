
function say(..._text){
    console.log(..._text);
}

let GDNU = {
    greenfalg:document.createElement('div'),
    goToPartInString(part,start,_text){
        let counter = start
        while(!(_text[counter] == part)){
            counter++
        }
        return(counter)
    },
    goThrue_A_and_B(a,b,_text){
        let rem = String(_text)
        let counter = 0

        let goThrue = 0
        counter = GDNU.nextOfThis([a,b],counter,rem)
        if(rem[counter] == a){
            goThrue++
        }
        else{
            goThrue--
        }
        counter++

        while(goThrue != 0){
            counter = GDNU.nextOfThis([a,b],counter,rem)
            if(rem[counter] == a){
                goThrue++
            }
            else{
                goThrue--
            }
            counter++
        }
        return(counter)
    },
    skipStartFunction (_func){
        let rem = String(_func)

        let counter = GDNU.goThrue_A_and_B("(",")",rem)

        counter = GDNU.nextOfThis("{",counter,rem)

        return(counter+1)
    },
    messagelist:[],
    nextOfThis(_nextOf, _startNum, _text){
        let rem = ""
        let text = _text.split("")
        if(text.some(r=> _nextOf.includes(r))){
            let counter = _startNum
            while (!( (_nextOf.includes(text[counter])) || (text.length < counter) )) {
                rem = rem + text[counter]
                counter++;
            }
            if(text.length<counter)console.error("The text is not containing the _nextOf");
            else{
                return counter
            }
        }
        else{
            console.error("The text is not containing the _nextOf");
        }
    },
    enter:`
    `,
}

GDNU.greenfalg.style.height = "100px";
GDNU.greenfalg.style.width = "100px";
GDNU.greenfalg.style.backgroundColor = "#00ff00";
GDNU.greenfalg.style.position = "absolute";
GDNU.greenfalg.style.left = "100px"
GDNU.greenfalg.style.top = "100px"
document.querySelector("html").append(GDNU.greenfalg)

function scratch({},_func){

    ////////////////////////////////
    let counter = GDNU.skipStartFunction(_func)
    ////////////////////////////////

    let text = String(_func)
    if(text.includes("wait_until")){
        counter = text.indexOf("wait_until")
        let start_num = counter
        //say(counter+GDNU.enter+text[counter]+GDNU.enter+text)
        let rem = ""
        GDNU.goToPartInString("(",counter,text)
        /**need more work */
    }
}

function sprite({
    Costumes = [["thing","thing"]],
    Sounds = [["thing","thing"]],
    Variables = [["thing","thing"]]
} = {},_func){

    /*
    let func = String(_func)
    let counter = GDNU.skipStartFunction(func)
    
    append(LDNU.Character)
    
    forever(()=>{
        LDNU.Character.parentNode.replaceChild(LDNU.Costumes.obj[LDNU.Costumes.active],LDNU.Character)
    })

    func = func.add(counter,`
    
    `)

    repeat(rem.Variable.length,(e)=>{
        let rem_a = rem.Variable[e]
        
        LDNU.Variable.name.push(rem_a[0])
        LDNU.Variable.obj.push(rem_a[1])

        func = func.add(counter,`
        let ${rem_a[0]} = ${rem_a[1]}
        `)
    })
    
    repeat(rem.Costumes.length,(e)=>{
        let rem_a = rem.Costumes[e]
        
        LDNU.Costumes.name.push(rem_a[0])
        LDNU.Costumes.obj.push(rem_a[1])
    })
    */

    _func()

}

/**when_greenfalg_clicked */
function when_greenfalg_clicked(_func){
    GDNU.greenfalg.onclick = ()=>{
        _func()
    } 
}

/**when_key_pressed */
function when_key_pressed(_key,_func){
    addEventListener("keypress", function(e){
        if(e.key == _key){
            _func()
        }
    })
}

/**when_I_receive */
function when_I_receive(_message,_func){
    GDNU.messagelist.push({_message,_func})
}

/**brodcast */
function brodcast(_message,_var=undefined){
    for( var i=0; i<GDNU.messagelist.length ; i++ ){
        if(GDNU.messagelist[i]._message == _message){
            GDNU.messagelist[i]._func(_var)
        }
    }
}

/**wait_seconds
 * await wait_seconds(<seconds>)
 */
function wait_seconds(_seconds){
    return new Promise( resolve => setTimeout( resolve, _seconds*1000 ))
}

/**work in progres */
function repeat(times, _func) {
    for(var i = 0; i < times; i++) {
        _func(i)
        
    }
}



function wait_until(_boolean) {
    return new Promise((resolve) => {
        const update = ()=>{
            if(_boolean)resolve()
            requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
    })
}

Array.prototype.remove = function(_num){
    let array = this.valueOf()
    let index = array.indexOf(_num);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array)
}

function checkKeys(..._key){
    let rem = false
    repeat(_key.length,(i)=>{
        if(keys.includes(_key[i])){
            rem = true
        }
    })
    return(rem)
}

let keys = []

addEventListener("keydown", (e)=>{
    if(keys.includes(e.key)) return
    keys.push(e.key)
})

addEventListener("keyup",(e)=>{
    keys.remove(e.key)
})

