export function timeoutDemo(){
    console.log(1);
    setTimeout(say,1000);
    console.log(2);
}

function say(){
    console.log('meow');
}