document.getElementById("btn_aceptar").addEventListener('click', ajax);

function ajax(event) {
    event.preventDefault(); // evitar que se envie el formulario automaticamente
    console.log("Ajax function!");

    let data = new FormData(); // crear un formulario 
    data.append("num1", 5);
    data.append("num2", 3);

    const xhr = new XMLHttpRequest();
    const url = "test.php";

    xhr.onreadystatechange = function () {
        console.log("Estado: " + this.readyState);
        if (this.readyState == 4) {
            if (this.status == 200 ) { // 200 es correcto 
                console.log(this.responseText);
            } else {
                console.log("Error cargando la página\n");
            }
        }
    };

    xhr.open("POST", url); // abro la peticion usando url 
    xhr.send(data); // envio los datos 





    


}