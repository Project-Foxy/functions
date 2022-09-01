
let nothing = ""

let enter = `
`
let space = " "

let date = new Date
forever(()=>{
    date = new Date
})

function sec(_num) {
    
    return(_num * 1000)
    
}

/** @default
 * You do NOT need this
 * naf = not a function
 */
let naf = {
    lineNum: 0,
    penNum: 0,
    pen3dNum: 0,
    store: [],
    storeName: [],
    penready: true,
    makeDivId(_id){
        let div = document.createElement("div")
        div.id = _id
        document.querySelector("html").appendChild(div)
    },
    
    coseineY: 0,
    coseineX: 0,
    sineX: 0,
    sineY: 0,
    
    x:0,
    y:0,
    z:0,

    setPoint(_x, _y, _z){
        this.x = _x
        this.y = _y
        this.z = _y
    },
    
    eventList: [],
    
    TenToHex(_color) {
        
        let color = mod(_color, 256)
        
        let rem = "0123456789abcdef"
        return( ( rem[ Math.floor(color / 16) ] ) + ( rem[ Math.floor( mod(color, 16) ) ] ) )
    },
    
    styleDiv(){
        
        
        
    },
    
    psAlradyConnected: false,
    psButton:false,
    psButton1:false,
    psButton2:false,
    psButton3:false,
    psButton4:false,
    
    imgName:[],
    imgSaves:[],
    soundName:[],
    soundSaves:[],
    objName:[],
    obj:[],
    
    penId:[],
    pen3dId:[],

    timer: date.getTime(),
    
    func_Sleep(_func) {
        let func = _func
        let rem = ""
        let rem_sleep = func.indexOf("sleep")
        let conter = rem_sleep + 6
        
        while (!(func[conter] == ")")) {
        
            rem += func[conter]
            conter++
        }
        
        func = func.slice(0, rem_sleep) + "setTimeout(()=>{" + func.slice(conter+1, func.length-1) + `},${sec(rem)})` + func[func.length-1]
    return (func)
},

func_goStart(_func){
    let func = _func
    let rem = ""
    let rem_goStart = func.indexOf("goStart")
    let conter = rem_goStart + 8
    
    while (!(func[conter] == ")")) {
        
        rem += func[conter]
        conter++
    }    
    
    func = func.slice(0, rem_goStart) + (`goStart(${rem})`,`
    let ${rem}a = true
    ${rem}:while (${rem}a) {`) + func.slice(conter+1, func.length-1) + `${rem}a = false
}`+ func[func.length-1]
return (func)
},


makeAll(_func) {
    let func = String(_func)
    while (func.includes("goBack")) {
        let rem = ""
        let rem_goStart = func.indexOf("goBack")
        let conter = rem_goStart + 7
        
        while (!(func[conter] == ")")) {
            
            rem += func[conter]
            conter++
        }    
        
        func = func.replace(`goBack(${rem})`,`continue ${rem}`)
    }
    
    while (func.includes("goStart")||func.includes("sleep")) {
        if(func.lastIndexOf("sleep") < func.lastIndexOf("goStart")) {
            func = this.func_goStart(func)
        }
        else{
            func = this.func_Sleep(func)
        }
    }
    
    return(eval(func))
}
}

function smallestHW(){
    if(window.innerHeight <= window.innerWidth){
        return(window.innerHeight)
    }
    return(window.innerWidth)
}

function percent(a,b){
    return(a/b*100)
}


function makeText(...toText){
    return(`${toText}`)
}

function makeFunc(...toFunc){
    return( Function(toFunc) )
}

function getElementById(_id) {
    return(document.getElementById(_id))
}

function goStart(){}
function goBack(){}
function goEnd(){}

function sleep(){}

/**
 * @default 
 * place all of your code in her
 */
function setup({
    divPen = true,
    divPen3d = false,
    touchAction = true,
    pointer = false,
    autoCSS = "none",
    extra_funcs = true,
    show_mouse_position = false,
    autoObj = true,
    show_canvas_border = false,
    pause_button = false,
    say_code = false,
} = {},_func = ()=>{}) {
    
    if(say_code){
        say(_func)
    }

    if(autoObj){
        //
        obj.save("div",document.createElement("div"));
        //
        obj.save("img",document.createElement("img"));
        //
        obj.save("audio",document.createElement("audio"))
        //
        obj.save("canvas",document.createElement("canvas"));
        //
        
    }

    if(autoCSS == "purple") {
        document.querySelector("html").style.backgroundColor = rgb(138,60,138)
        document.querySelector("html").style.color = rgb(255,255,255)
    }
    if(autoCSS == "darkMode") {
        document.querySelector("html").style.backgroundColor = rgb(0,0,0)
        document.querySelector("html").style.color = rgb(255,255,255)
    }
    
    if(!(pointer == false)){
        document.querySelector("html").style.cursor = pointer
    }
    
    if(!touchAction){
        document.querySelector("html").style.touchAction = "none"
    }
    
    if(divPen){
        naf.makeDivId("pen")
    }

    if(divPen3d){
        let div = document.createElement('div')
        div.id = "pen3d"

        let ds = div.style
        ds.transformStyle = "preserve-3d"
        ds.transform = `
        perspective(800px)
        rotate3d(1, 0, 0, 0deg)
        rotate3d(0, 1, 0, 0deg)
        rotate3d(0, 0, 1, 0deg)
        translateX(0px)
        translateY(0px)
        translateZ(0px)
        `
        appendChild(div)
    }

    let func = _func
    
    if(extra_funcs){
        func = naf.makeAll(func)
    }

    if(say_code){
        say(func)
    }
    
    requestAnimationFrame(eval(func))

    if(show_mouse_position){
        obj.clone("setup:show_mouse_div","div")
        forever(()=>{
            obj.style.reset()
            obj.style.textSize = 30
            obj.style.width = 200
            obj.style.height = 70
            obj.style.color = invisible
            obj.append("setup:show_mouse_div")
            obj.style.y = mouse_Y + 70
            obj.style.x = mouse_X
            obj.style.text = "mouse_X: " + floor(mouse_X) + enter + "mouse_Y: " + floor(mouse_Y)
            obj.update("setup:show_mouse_div")
        })
    }
    if(show_canvas_border){
        obj.clone("setup:show_canvas_border_div","div")
        obj.append("setup:show_canvas_border_div")
        forever(()=>{
            obj.style.reset()
            obj.style.y = 500
            obj.style.x = 500
            obj.style.width = 900
            obj.style.height = 900
            obj.style.color = invisible
            obj.style.borderSize = 50
            obj.update("setup:show_canvas_border_div")
        })
    }
    if(pause_button) {
        obj.save("setup:pause_button_div","/StioStudio.github.io/resurser/bilder/pause_a.png")
        obj.img.load("setup:pause_button_div")
        obj.style.reset()
        obj.style.y = 100
        obj.style.x = 900
        obj.style.width = 100
        obj.style.height = 100
        obj.style.color = invisible
        obj.update("setup:pause_button_div")
        obj.append("setup:pause_button_div")
        obj.get("setup:pause_button_div").onclick = (()=>{
            say("pause")
            debugger
        })
    }
}

let obj = {
    say(objName){
        let rem = naf.obj[naf.objName.indexOf(objName)]
        say(rem)
    },
    open(objName){
        let rem = naf.obj[naf.objName.indexOf(objName)]
        open(rem)
    },
    save(objName, obj){
        if(naf.objName.includes(objName)){
            let rem = naf.objName.indexOf(objName)
            naf.objName[rem] = objName
            naf.obj[rem] = obj
        }
        else{
            naf.objName.push(objName)
            naf.obj.push(obj)
        }
    },
    clone(NEWobjname, objName){
        let rem = naf.obj[naf.objName.indexOf(objName)]
        naf.objName.push(NEWobjname)
        if(rem instanceof Element){
            rem = rem.cloneNode(true)
        }
        naf.obj.push(rem)
    },
    rename(NEWobjname,objName){
        naf.objName[naf.indexOf(objName)] = NEWobjname
    },
    getWithNum(num){
        if(naf.objName[num] == undefined){
            return(undefined)
        }
        return(naf.obj[num])
    },
    get(objName){
        if(naf.objName.includes(objName)){
            return(naf.obj[naf.objName.indexOf(objName)])
        }
        return(undefined)
    },
    getClone(objName,deep=true){
        let rem = naf.obj[naf.objName.indexOf(objName)]
        if(!(rem instanceof Element)){
            console.error("You can only clone elements")
            return
        }
        if(naf.objName.includes(objName)){
            return(rem.cloneNode(deep))
        }
        return(undefined)
    },
    id: "none",
    class: [],
    deleteClass(_className){
        this.class[this.class.indexOf(_className)] = ""
    },
    addClass(_className){
        this.class.push(_className)
    },
    line:{
        append(objName){
            let rem = naf.objName.indexOf(objName)
            let rem_a = naf.obj[rem];
            let rem_b = document.createElement("svg")
            let rem_c
            let rem_d
            
            rem_c = rem_a.attributes[1].value
            rem_d = rem_a.attributes[3].value
            if(rem_c>=rem_d){
                rem_b.setAttribute("height", rem_c)
            }
            else{
                rem_b.setAttribute("height", rem_d)
            }

            rem_c = rem_a.attributes[0].value
            rem_d = rem_a.attributes[2].value
            if(rem_c>=rem_d){
                rem_b.setAttribute("width", rem_c)            }
            else{
                rem_b.setAttribute("width", rem_d)
            }
            

            say(rem_b.attributes)
            
            rem_b.append(rem_a)
            append(rem_b)
        },
        reset(){
            this.width = "1"
            this.height = "1"
            this.x1 = 0
            this.y1 = 0
            this.x2 = 0
            this.y2 = 0
            this.color = rgb(255,0,0)
        },
        width: "1",
        height: "1",
        x1:0,
        y1:0,
        x2:0,
        y2:0,
        color: rgb(255,0,0),
        lineCap: "round",
        update(objName){
            
            let rem = naf.obj[naf.objName.indexOf(objName)]
            /**
             let rem = document.createElement("line")
             */
            let rs = rem.style
            if(!(rem instanceof Element)){
                console.error("You can only style elements")
                return
            }
            rs.stroke = this.color
            rs.strokeWidth = this.width
            rs.lineCap = this.lineCap
            rem.setAttribute("x1", this.x1)
            rem.setAttribute("y1", this.y1)
            rem.setAttribute("x2", this.x2)
            rem.setAttribute("y2", this.y2)
        }
    },
    style:{
        update(objName, autoCSS=true){
            let rem = naf.obj[naf.objName.indexOf(objName)];
            if(rem instanceof Element){
                //let rem = document.createElement("div")
                let SP
                if(autoCSS){
                    SP = smallestHW()/1000
                }
                else{
                    SP = 1
                }
                let rs = rem.style
                rem.id = this.id
                rem.classList.add("obj")
                repeat(obj.class.length,()=>{
                    rem.classList.add(this.class.pop());
                })
                rs.backgroundColor = this.color
                rs.position = this.position
                rs.width = `${this.width*SP}px`
                rs.height = `${this.height*SP}px`
                rs.borderRadius = `${this.radius}`
                rs.border = `${this.borderSize*SP}px solid ${this.borderColor}`
                rem.innerText = this.text
                rs.font = this.textType
                rs.fontSize = `${this.textSize*SP}px`
                rs.transform = `rotate(${this.rotation}deg)`
                rs.left = `${this.x*SP - (this.width*SP / 2 + (this.borderSize*SP))}px`
                rs.top = `${this.y*SP - (this.height*SP / 2 + (this.borderSize*SP))}px`
                
                return
            }
            console.error("You can only style elements")
        },
        color: "#ff0000",
        position: "absolute",
        
        width: 100,
        
        height: 100,
        
        radius: "0",
        
        borderSize: 0,
        
        borderColor: "#000000",
        
        text: "",
        
        textType: "none",
        
        textSize: 50,
                
        rotation: 0,
        x: 0,
        y: 0,
        reset(){
            this.color = "#ff0000"
            this.position = "absolute"
            this.width = 100
            this.height = 100
            this.radius = "0"
            this.borderSize = 0
            this.borderColor = "#000000"
            this.text = ""
            this.textType = "none"
            this.textSize = 50
            this.rotation = 0
            this.x = 0
            this.y = 0

        }
    },
    append(objName,clone=false,deep=true){
        let rem = naf.obj[naf.objName.indexOf(objName)];
        if(clone){
            rem = rem.cloneNode(deep)
        }
        document.querySelector("html").append(rem)
    },
    img:{
        load(objName){
            let rem = naf.objName.indexOf(objName)
            naf.obj[rem] = LoadImage(naf.obj[rem])
        }
    },
    snd:{
        load(objName){
            let rem = naf.objName.indexOf(objName)
            naf.obj[rem] = LoadSound(naf.obj[rem])
        },
        play(objName, {loop = false} = {}){
            //let snd = document.createElement("audio")
            let snd = naf.obj[naf.objName.indexOf(objName)]
            snd.loop = loop != null ? loop : false;
            snd.play()
        },
        pause(objName){
            naf.obj[naf.objName.indexOf(objName)].pause()
        },
    }
}

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
    
    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
        );
    }
    
/** @default
 * console.log("text")
 */
function say(..._text) {
    console.log(..._text)
}

/** @default
 *  repeat{
 for (let i = 0; i < times; i++) {
     text()
    }
}
*/
function forever(_func){
    let update = () => {
        _func()
        window.requestAnimationFrame(update)
    }
    window.requestAnimationFrame(update)
}

function repeat(times, _func) {
    for (let i = 0; i < times; i++) {
        _func()
    }
}



let timer = 0

forever(()=>{
    timer = date.getTime()-naf.timer 
})

function restartTimer(){
    naf.timer = date.getTime()
    timer = 0
}

let pen = {
    
    style: { 
        hide(){
            this.color = rgb(255, 255, 255,255);
            this.borderSize = 0
            this.borderColor = rgb(255, 255, 255, 255);
        },
        reset(){
            
            this.color = "#ff0000"
            
            this.height = 100
            
            this.width = 100
            
            this.position = "absolute",
            
            this.radius = "0%"
            
            this.borderSize = 0
            
            this.borderColor = "#000000"
            
            this.text = ""
            
            this.textType = "none"
            
            this.textSize = 50
            
            this.innerHTML = document.createElement("div")
            
            this.id = "none"
            
        },
        
        /** @default
         * you can set the color like this
         * color{
         * "#ff0000" = red
         * hsl(0, 100%, 50%) = red
         * hwb(0 0% 0%) = red
         * rgb(255, 0, 0) = red
         * red = red
         * }
         */
        color: "#00000000",
        
        /** @default
         * You can change the position type (default is absolute)
         * types of position{
         * absolute
         * fixed
         * relative
         * static
         * sticky
         * }
         */
        position: "absolute",
        
        width: 100,
        
        height: 100,
        
        radius: "0%",
        
        borderSize: 0,
        
        borderColor: "#000000",
        
        text: "",
        
        textType: "none",
        
        textSize: 50,
        
        innerHTML: document.createElement("div"),
        
        id: "none",
        
    },
    
    varReset(){

        this.rotation = 0
        this.x = 0
        this.y = 0
        
    },
    
    rotation: 0,
    x: 0,
    y: 0,
    
    move(move){
        this.x += sin(this.rotation) * move
        this.y += sin(this.rotation - 90) * move
    },
    
    
    /** @default
     * Makes a rectangle on the html/website.
     * You can style the rectangle with pen.style."name on style"
     */
    rectangle(){
        let SP = smallestHW()/1000
        let div = this.style.innerHTML.cloneNode(true)
        naf.penNum++
        naf.penId.push(this.style.id)
        div.id = naf.penNum
        
        div.innerText = this.style.text
        div.style.font = this.style.textType
        div.style.fontSize = `${this.style.textSize*SP}px`
        div.style.position = pen.style.position
        div.style.backgroundColor = pen.style.color
        div.style.height = pen.style.height*SP+"px"
        div.style.width = this.style.width*SP+"px"

        div.style.top =  (this.y*SP - (this.style.height*SP / 2 + (this.style.borderSize*SP)))+"px"
        div.style.left = (this.x*SP - (this.style.width*SP / 2 + (this.style.borderSize*SP)))+"px"
        
        div.style.borderRadius = this.style.radius
        div.style.border = `${this.style.borderSize*SP}px solid ${this.style.borderColor}`
        div.style.transform = "rotate("+ (this.rotation) +"deg)"
        
        
        document.getElementById("pen").appendChild(div)
    },
    clear(){
        document.getElementById("pen").innerHTML = ""
        naf.penNum = 0
        naf.penId = []
    }
}

function getPenId(_id){
    
    return(getElementById((naf.penId.indexOf(_id)+1)))
    
}


/** @default
 * not done for now
 */
let pen3d = {
    x: 0,
    y: 0,
    z: 0,
    rotation_X: 0,
    rotation_Y: 0,
    rotation_Z: 0,
    style:{
        position: "absolute",
        height:100,
        width:100,
        id:"none",
        color: rgb(255,0,0),
        x: 0,
        y: 0,
        z: 0,
        rotation_X: 0,
        rotation_Y: 0,
        rotation_Z: 0,
    },
    rectangle(){
        let SP = smallestHW()/1000
        //let div = this.style.innerHTML.cloneNode(true)
        let div = document.createElement("div")
        let ds = div.style
        naf.pen3dNum++
        naf.penId.push(this.style.id)
        div.id = naf.pen3dNum
        
        ds.backgroundColor = this.style.color
        ds.height = this.style.height+"px"
        ds.width = this.style.width+"px"

        ds.position = "absolute"
        ds.transform = `
        rotateX(${this.style.rotation_X}deg)
        rotateY(${this.style.rotation_Y}deg)
        rotateZ(${this.style.rotation_Z}deg)
        translateX(${this.style.x}px)
        translateY(${this.style.y}px)
        translateZ(${this.style.z}px)
        `
                
        document.getElementById("pen3d").appendChild(div)

    },
}

function getPen3dId(_id){
    
    return(getElementById((naf.pen3dId.indexOf(_id)+1)))
    
}

/** @default
 * Math
 * 
 * findes the cordinate between x1,y1 and x2,y2 wit the percent
 * 
 * lerp{
 let percent = _percent * 2;
 let x =  ((x1 * (2 - percent)) + (x2 * percent)) / 2;
 return ( x );
}
*/

function lerp(a, b, _percent){
    
    let percent = _percent * 2;
    let out =  ((a * (2 - percent)) + (b * percent)) / 2;
    
    return ( out );
    
}

/** @default
 * Math
 * 
 *  cos{
 return(Math.cos(element))
}
* */
function cos(element) {
    return(Math.cos(6.28 / 360 * element))
}

/** @default
 * Math
 * 
 *  sin{
 return(Math.sin(element))
}
* */
function sin(element) {
    return(Math.sin(6.28 / 360 * element))
}

let invisible = rgb(255, 255, 255, 0)

/** @default
 * Math
 * 
 *  sqrt{
        return(Math.sqrt(element))
    }
 * */
function sqrt(element) {
    return(Math.sqrt(element))
}

/** @default
 * Math
 * 
 *  abs{
        return(Math.abs(element))
    }
 * */
function abs(element) {
    return(Math.abs(element))
}


function round(_num, amount=1){
    let a = 10**amount
    return(Math.round(_num*a)/a)
}

function floor(_num, amount=0){
    let a = amount
    let num = String(_num)
    if(0<=a){
        return( Number(num.slice(0, num.indexOf(".")+a+1)) )
    }
    else {
        let b = ""
        repeat(0-a,()=>{
            b += "0"
        })
        return( Number(num.slice(0, num.indexOf(".")+a)+b) )
    }
}

/** @default
 * Math
 * Gives you a the distance between the cordinates
 * 
 *  distance(x1, y1, x2, y2){
        return( Math.sqrt((x1 - x2)**2 + (y1 - y2)**2) )
    }
 * */
function distance(x1, y1, x2, y2){
    return( sqrt((x1 - x2)**2 + (y1 - y2)**2) )
}

/** @default
 * Math
 * Gives you the direction from x1,y1 to x2,y2
 * 
 *  point(x1, y1, x2, y2){
        return( Math.atan2 (x2 - x1, y2 - y1) * 180 / Math.PI )
    }
 * */
function point(x1, y1, x2, y2){
    return( Math.atan2 (x2 - x1, y2 - y1) * 180 / Math.PI )
}

/** @default
 * Math
 * 
 * gives a nummber betwwen 0 and element
 * you can add desimals by saying true on "desimal"
 */
function random(_element, desimal) {

    let rem = Math.random()*_element

    if (not(desimal)){
        rem = Math.round(rem)
    }

    return ( rem )
}

/** @default
 * Math
 * 
 * true + true = true
 * false + true = false
 * true + false = false
 * false + false = false
 * true = 1
 * false = 0
 */
function and(a,b){
    return(a && b)
}

/** @default
 * Math
 * 
 * true = false
 * false = true
 * true = 1
 * false = 0
 */
function not(a) {
    return(!a)
}

function mod(a, b) {
    return(a % b)
}

function LoadImage(url) {
    let img;
    new Promise((resolve) => {
        img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
    });
    return img;
}


//////////////////////////////////////
// Sound
//////////////
document.cookie = "promo_shown=1; Max-Age=2600000; Secure"

function LoadSound(url) {
    var snd = new Audio();
    new Promise((resolve, reject) => {
        snd.preload = "auto";                      // intend to play through
        snd.autoplay = false;                       // autoplay when loaded
        snd.onerror = reject;                      // on error, reject
        snd.onended = resolve;                     // when done, resolve
        snd.loop = false;

        snd.src = url;       
    });
    return snd;
}

//////////////////////////////////////

let link = document.URL

function cutLink(_link) {
    let rem = _link
    if(rem[rem.length-1] == "/"){
        rem = rem.slice(0, rem.length-1)
    }
    rem = rem.split("/")
    return(rem)
}


let img = {
    save(_imgName, _imgUrl){
       naf.imgName.push(_imgName)
       naf.imgSaves.push(LoadImage(_imgUrl)) 
    },
    get(_imgName){
        if(naf.imgName.includes(_imgName)){
            return(naf.imgSaves[naf.imgName.indexOf(_imgName)])
        }
        return(document.createElement("img"))
    }
}

let snd = {
    save(_soundName, _soundUrl){
       naf.soundName.push(_soundName)
       naf.soundSaves.push(LoadSound(_soundUrl)) 
    },
    get(_soundName){
        return(naf.soundSaves[naf.soundName.indexOf(_soundName)])
    },

    play(_soundName, {loop = false} = {})
    {
        var snd = snd.get(_soundName);
        snd.loop = loop != null ? loop : false;
        snd.play()
    },

    pause(_soundName)
    {
        snd.get(_soundName).pause()
    },

}

function rgb(red=0, green=0, blue=0, transparency = 255){
    return("#" + naf.TenToHex(red) + naf.TenToHex(green) + naf.TenToHex(blue) + (naf.TenToHex(transparency)))
}

function createElement(_element){
    return(document.createElement(_element))
}
function appendChild(_element){
    document.querySelector("html").appendChild(_element)
}
function append(_element){
    document.querySelector("html").append(_element)
}
let eventer = {
    listen(_name_, _func){
        let code = {
            _name_,
            _text: _func
        }
        naf.eventList.push(code)
    },
    send(_name, _var){
        let i = 0

        repeat(naf.eventList.length,()=>{

            if ( naf.eventList[i]._name_ == _name ){
                naf.eventList[i]._text(_var)
            }

            i++
        })
    }
}

let mouseClick = false
addEventListener("pointerdown", ()=>{
    mouseClick = true
})
addEventListener("pointerup", ()=>{
    mouseClick = false
})

let mouse_page_X = 0
let mouse_page_Y = 0

let mouse_X = 0
let mouse_Y = 0

addEventListener("pointermove",(e)=>{
    mouse_page_X = e.pageX
    mouse_page_Y = e.pageY
    let SP = smallestHW()/1000
    mouse_X = e.pageX/SP
    mouse_Y = e.pageY/SP

})


Array.prototype.remove = function(_num){
    let array = this.valueOf()
    let index = array.indexOf(_num);
    if (index > -1) {
        array.splice(index, 1);
    }
    return(array)
}

String.prototype.remove = function(_text){
    return(this.valueOf().replace(_text,""))
}

function checkKeys(_key){
    return(keys.includes(_key))
}

let keys = []

addEventListener("keydown", (e)=>{
    if(keys.includes(e.key)) return
    keys.push(e.key)
})

addEventListener("keyup",(e)=>{
    keys.remove(e.key)
})


window.getGamepads = navigator.getGamepads()
let con ={
    name: "none",
    active: false,
    player: undefined,
    
    cross: 0,
    circle: 0,
    square: 0,
    triangle: 0,
    
    l1: 0,
    l2: 0,
    l2: 0,
    
    r1: 0,
    r2: 0,
    r3: 0,
    
    rX: 0,
    rY: 0,

    lX: 0,
    lY: 0,
    
    arrow_Up: 0,
    arrow_Down: 0,
    arrow_Left: 0,
    arrow_Right: 0,
    
    share: 0,
    options: 0,
    ps: 0,
    touchPad: 0,
}
let conPrimary = 0
window.con1 = con
window.con2 = con
window.con3 = con
window.con4 = con
window.cons = {con1,con2,con3,con4}


addEventListener("gamepadconnected", ()=>{
    window.getGamepads = navigator.getGamepads()
    if (!(undefined == window.getGamepads[3])){
        conPrimary = 3
    }
    if (!(undefined == window.getGamepads[2])){
        conPrimary = 2
    }
    if (!(undefined == window.getGamepads[1])){
        conPrimary = 1 
    }
    if (!(undefined == window.getGamepads[0])){
        conPrimary = 0
    }
    
    if(!naf.psAlradyConnected){
    naf.psAlradyConnected = true
    forever(()=>{
        
        window.getGamepads = navigator.getGamepads()
        
        function conF(conNum) {
        return{
            
            name: getGamepads[conNum].id,
            active: getGamepads[conNum].connected,
            player: conNum,

            cross: getGamepads[conNum].buttons[0].value,
            circle: getGamepads[conNum].buttons[1].value,
            square: getGamepads[conNum].buttons[2].value,
            triangle: getGamepads[conNum].buttons[3].value,
            
            l1: getGamepads[conNum].buttons[4].value,
            l2: getGamepads[conNum].buttons[6].value,
            l3: getGamepads[conNum].buttons[10].value,
            
            r1: getGamepads[conNum].buttons[5].value,
            r2: getGamepads[conNum].buttons[7].value,
            r3: getGamepads[conNum].buttons[11].value,
            
            rX: getGamepads[conNum].axes[2],
            rY: getGamepads[conNum].axes[3],
            
            lX: getGamepads[conNum].axes[0],
            lY: getGamepads[conNum].axes[1],
            
            arrow_Up: getGamepads[conNum].buttons[12].value,
            arrow_Down: getGamepads[conNum].buttons[13].value,
            arrow_Left: getGamepads[conNum].buttons[14].value,
            arrow_Right: getGamepads[conNum].buttons[15].value,
            
            share: getGamepads[conNum].buttons[8].value,
            options: getGamepads[conNum].buttons[9].value,
            ps: getGamepads[conNum].buttons[16].value,
            touchPad: getGamepads[conNum].buttons[17].value,
        }
    }

    if (!(undefined == window.getGamepads[0])){
        window.con1 = conF(0) 
    }
    if (!(undefined == window.getGamepads[1])){
        window.con2 = conF(1) 
    }
    if (!(undefined == window.getGamepads[2])){
        window.con3 = conF(2) 
    }
    if (!(undefined == window.getGamepads[3])){
        window.con4 = conF(3) 
    }
    window.cons = {con1,con2,con3,con4}
    con = conF(conPrimary)
})
forever(()=>{
    if(and((con1.ps||con2.ps||con3.ps||con4.ps),(!(naf.psButton)))){
        naf.psButton = true
        if(con1.ps){
            eventer.send("psDown", 1)
            naf.psButton1 = true
        }
        if(con2.ps){
            eventer.send("psDown", 2)
            naf.psButton2 = true
        }
        if(con3.ps){
            eventer.send("psDown", 3)
            naf.psButton3 = true
        }
        if(con4.ps){
            eventer.send("psDown", 4)
            naf.psButton4 = true
        }
    }
    if(and(!(con1.ps||con2.ps||con3.ps||con4.ps),((naf.psButton)))){
        naf.psButton = false
        if(naf.psButton1){
            eventer.send("psUp", 1)
            naf.psButton1 = false
        }
        if(naf.psButton2){
            eventer.send("psUp", 2)
            naf.psButton2 = false
        }
        if(naf.psButton3){
            eventer.send("psUp", 3)
            naf.psButton3 = false
        }
        if(naf.psButton4){
            eventer.send("psUp", 4)
            naf.psButton4 = false
        }
    }
    if((con1.ps||con2.ps||con3.ps||con4.ps)){
        if(con1.ps)eventer.send("psPress", 1)
        if(con2.ps)eventer.send("psPress", 2)
        if(con3.ps)eventer.send("psPress", 3)
        if(con4.ps)eventer.send("psPress", 4)
    }
})

let psButtonStart = false
let psButtonTimes = 0
eventer.listen("psDown",(e)=>{

    if(!psButtonStart){
        psButtonStart = true
        psButtonTimes = 0
        restartTimer()
    }

})

eventer.listen("psUp",(e)=>{
    if(psButtonStart){
        psButtonTimes++
        if(timer >= 1500){
            psButtonStart = false
        }
        if(psButtonTimes == 3){
            psButtonTimes = 0
            if(e-1 == true){
                conPrimary = 0
            }
            if(e-1 == true){
                conPrimary = 1
            }
            if(e-1 == true){
                conPrimary = 2
            }
            if(e-1 == true){
                conPrimary = 3
            }
        }
    }
})
    
    /**@default
     * når ned strat timer
     * vis (timer < 1500 ms)
     * trykk på psUp 3 ganger for å sette til primary
     */


/*
    if(timer > 1500||psButtonTimes == 3){
        if(psButtonTimes == 3){
            psButtonTimes = 0
            if(e-1 == true){
                conPrimary = 0
            }
            if(e-1 == true){
                conPrimary = 1
            }
            if(e-1 == true){
                conPrimary = 2
            }
            if(e-1 == true){
                conPrimary = 3
            }
        }
        psButtonStart = true
        psButtonTimes = 0
        restartTimer()
    }
    psButtonTimes++
    say(psButtonTimes)
*/
}

})




