export function callbackHell(){
    const catOneRequest = new XMLHttpRequest();
    catOneRequest.open('GET', 'http://localhost:3000/cats/1');
    catOneRequest.send();
    catOneRequest.onload = () => {
        console.log(catOneRequest.responseText);
        const catTwoRequest = new XMLHttpRequest();
        catTwoRequest.open('GET', 'http://localhost:3000/cats/2');
        catTwoRequest.send();
        catTwoRequest.onload = () => {
            console.log(catTwoRequest.responseText);
            const catThreeRequest = new XMLHttpRequest();
            catThreeRequest.open('GET', 'http://localhost:3000/cats/3');
            catThreeRequest.send();
            catThreeRequest.onload = () => {
                console.log(catThreeRequest.responseText);
            };
        };
    };
}

