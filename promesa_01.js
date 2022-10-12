const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    setTimeout(() => {
        console.log(number);
        if (number > 5)
            resolve (number) // resuelve la promesa 
        else 
            reject(new Error('Menor a 5')) // rechaza la promesa 
        
    }, 1000);
});

promise 
    .then (number   => console.log(number)) // cuando se resuelve la promesa 
    .catch(error    => console.error(error)); // cuando se rechaza la promesa 