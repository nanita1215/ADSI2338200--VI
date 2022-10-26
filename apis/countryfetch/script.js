let selectPaises = document.querySelector("#lista_paises");
selectPaises.addEventListener("change", infoCountry);

const baseUrl = "https://restcountries.com/v3.1/";

setCountries();

function setCountries(){
    // fetch(baseUrl+"/all")
    fetch(`${baseUrl}all`)
    .then(resp => resp.json())
    .then(data => {
        let htmlOptions = "";
        // data.map((item) =>{
        //     // console.log(item.name.common);
        //     return htmlOptions += `<option value="${item.ccn3}">${item.name.common}</option>`
        // });

        for(let item of data) {
            selectPaises.innerHTML += `<option value="${item.ccn3}">${item.name.common}</option>`
        }
        selectPaises.innerHTML += htmlOptions;
    })
}

function infoCountry(){
    fetch(`${baseUrl}alpha/${this.value}`)
    .then(resp => {
        if(resp.ok)
            return resp.json();
        else
            throw new Error('Error consumiendo API')
        })        
    .then(data =>{
        let idiomas = data[0].languages;
        let idiomasHtml = "";
        const arr = Object.values(idiomas).map((idioma) => {
            return idiomasHtml += `${idioma}-`
            }
        );
        document.getElementById("content").innerHTML += `
    <tr table-active>
        <th><img src="${data[0].flags.png}" alt="" width="50px">${data[0].flag}</th>
        <td>${data[0].name.common}</td>
        <td>${data[0].capital[0]}</td>
        <td>${data[0].population}</td>
        <td>${idiomasHtml}</td>
    </tr>    
    `    
    })
}

