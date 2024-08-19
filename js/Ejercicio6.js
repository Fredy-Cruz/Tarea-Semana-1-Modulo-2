/*EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, 
si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.*/

const newPrice = () =>{

    let price = 300;
    let discount = 0;
    let origin = document.getElementById("selectOrigin").value;
    let destiny = document.getElementById("selectDestiny").value;

    if(origin === 'CP' && destiny === 'LCS'){
        discount = 5;
    }else if(origin === 'CP' && destiny === 'P'){
        discount = 10;
    }else if(origin === 'CP' && destiny === 'PT'){
        discount = 15;
    }
    else if(origin === 'Otros' && destiny !== ''){
        document.getElementById('price').innerHTML = `El precio del viaje es ${price}$`;
        document.getElementById("newPrice").innerHTML = `No hay decuento`;
        return;
    }
    else if(origin === '' || destiny === ''){
        document.getElementById("newPrice").innerHTML = `Seleccione origen y destino`;
        return;
    }

    document.getElementById('price').innerHTML = `El precio original del viaje es ${price}$`;
    document.getElementById('newPrice').innerHTML = `Tiene un descuento del ${discount}%, el nuevo precio es `+(price - (price*(discount/100)));
};