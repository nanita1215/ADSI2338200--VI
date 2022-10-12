console.log("Paso 1");
setTimeout(()=>{
    console.log("Paso 2")
}, 1000);
setInterval
console.log('paso 3');


/********************/


let b;
console.log("a");
setTimeout(() => {
    b = 5;
}, 1000);
console.log(b)

/********************/

function ajax() {
    let data = new FormData();
    data.append("num1", 5);
    data.append("num2", 2);

    const xhr = new SMLHttpRequest();
    const url = 'test.php';

    

}