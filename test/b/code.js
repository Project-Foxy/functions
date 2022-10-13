
function sleep(time) {
    return new Promise( resolve => setTimeout( resolve, sec(time) ));
}

say(":D")
await sleep(1)
say("hi")
await sleep(1)
say("hello world")
