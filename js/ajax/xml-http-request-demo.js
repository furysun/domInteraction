export function xmlHttpRequestDemo() {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/cats');
    request.send();

    request.onload = () => {
        console.log(request.responseText);
    };
}
