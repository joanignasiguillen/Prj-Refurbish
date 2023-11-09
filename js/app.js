// Lee y recupera la lista de clientes almacenados en el localstore o bien si no hay datos, crea uno nuevo.
var listaclientes=JSON.parse(localStorage.getItem("clientesproyecto")) || [];
//console.log("Se han leido los clientes del local store", listaclientes);

//Todos los productos en la misma base de datos
var productos=[
    {numero:1, tipo:1, nombre: 'Monitor Phillips 24”', modelo:"PH24LTE", descripcion:"24 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor1.jpg", unidades:1, precio:120, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:2, tipo:1, nombre: 'Monitor Phillips 32”', modelo:"PH32LTE", descripcion:"32 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor2.jpg", unidades:1, precio:145, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:3, tipo:1, nombre: 'Monitor Samsung 42”', modelo:"S42PAL", descripcion:"42 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor3.jpg", unidades:1, precio:132, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:4, tipo:1, nombre: 'Monitor Samsung 32”', modelo:"SA32PTT", descripcion:"32 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor4.jpg", unidades:1, precio:112, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:5, tipo:1, nombre: 'Monitor Hitachi 24”', modelo:"HI24YUV", descripcion:"24 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor5.jpg", unidades:1, precio:102, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:6, tipo:1, nombre: 'Monitor Sony 19”', modelo:"SO19SVN", descripcion:"19 pulgadas. Refresco de 100 HZ. Entradas: HDMI y VGA. Resolución máxima 1920 x 1024.",
    imagen:"monitor6.jpg", unidades:1, precio:99, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:7, tipo:2, nombre: "Portátil Toshiba", modelo:"TO223QT", descripcion:"Procesador: I5, Hdd: ssd 512gb, Pantalla 14 pulgadas, Cámara, Wifi, Bluetooth 5.0.",
    imagen:"laptop1.jpg", unidades:1, precio:450, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:8, tipo:2, nombre: "Portátil Acer", modelo:"AC657A3", descripcion:"Chromebook Plus 514 CB514-3H-R88J, 14 pulgadas WUXGA, AMD Ryzen™ 5 7520C, 8GB RAM, 256GB SSD, Radeon™ 610M, Google ChromeOS",
    imagen:"laptop2.jpg", unidades:1, precio:510, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:9, tipo:2, nombre: "Portátil HP", modelo:"15s-fq5060ns", descripcion:"Intel® Core™ i7 1255U (De 12.ª generación). 16GB RAM. 512 GB SSD. PANTALLA 39,6 cm (15,6 pulg.), FHD (1920 x 1080). Gráficos Intel® Iris® Xᵉ ",
    imagen:"laptop3.jpg", unidades:1, precio:799, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:10, tipo:2, nombre: "Portátil HP gaming", modelo:"Victus 16-s0023ns", descripcion:"AMD Ryzen™ 7 7840HS16 GB RAM1 TB SSD16.1 FHD, 144 HzNVIDIA® GeForce RTX™ 4070 (8 GB)",
    imagen:"laptop4.jpg", unidades:1, precio:1359, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:11, tipo:2, nombre: "Portátil HP gaming", modelo:"OMEN Transcend 16-u0003ns", descripcion:"Intel® Core™ i7 13 gen, NVIDIA® GeForce RTX™ 4070 (8 GB) con auriculares HyperX",
    imagen:"laptop5.jpg", unidades:1, precio:1899, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:12, tipo:2, nombre: "Portátil HP gaming", modelo:"OMEN 16-wd0009ns", descripcion:"Intel® Core™ i7 13620H16 GB RAM1 TB SSD16.1 FHD, 165 Hz, 7 ms response timeNVIDIA® GeForce RTX™ 4060 (8 GB)",
    imagen:"laptop6.jpg", unidades:1, precio:1299, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:13, tipo:3, nombre: "PC HP gaming", modelo:"ENVY TE02-1004ns", descripcion:"Intel® Core™ i5 1340016 GB RAM512 GB SSDNVIDIA® GeForce RTX™ 3060 (12 GB)",
    imagen:"desktop1.jpg", unidades:1, precio:1249, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:14, tipo:3, nombre: "PC HP all in one", modelo:"PC All in One HP Pavilion 24-ca2007ns", descripcion:"ntel® Core™ i5 13400T16 GB RAM1 TB SSD23. 8 pulgadas FHDNVIDIA® GeForce GTX 1650 (4 GB)",
    imagen:"desktop2.jpg", unidades:1, precio:1049, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:15, tipo:3, nombre: "PC HP all in one", modelo:"PC All in One HP Pavilion 27-ca2017ns", descripcion:"Intel® Core™ i5 13400T16 GB RAM1 TB SSD 27 pulgadas FHDNVIDIA® GeForce® GTX 1650 (4 GB)",
    imagen:"desktop3.jpg", unidades:1, precio:1109, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:16, tipo:3, nombre: "PC HP", modelo:"PC HP M01-F3007ns", descripcion:"AMD Ryzen™ 5 5600G16 GB RAM512 GB SSDGráficos AMD Radeon™",
    imagen:"desktop4.jpg", unidades:1, precio:649, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:17, tipo:3, nombre: "PC HP", modelo:"PC HP Slim S01-aF2001ns", descripcion:"Intel® Celeron® J40258 GB RAM512 GB SSDGráficos Intel® UHD 600",
    imagen:"desktop5.jpg", unidades:1, precio:249, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
    {numero:13, tipo:3, nombre: "PC HP gaming", modelo:"PC Gaming OMEN 45L GT22-1020ns", descripcion:"Intel® Core™ i9 13900K32 GB RAM2 TB SSDNVIDIA® GeForce RTX™ 4080 (16 GB)",
    imagen:"desktop6.jpg", unidades:1, precio:3349, fcompra:"10-12-2023", fventa:"10-12-2023", fvendido:"10-12-2023", promo: 0},
];

//Se usan para guardar y restaurar las medidas de la imágen
var imgx=imgy=0;

//Guarda los datos de clientes en localstore del navegador
function guardarclientes(){
    localStorage.setItem("clientesproyecto", JSON.stringify(listaclientes));
    //console.log("Se han guardado los clientes en el local store");
}

// Agrega un nuevo cliente de los valores del formulario entrados.
function agregarcliente(){
    //console.log("llamada a agregarcliente");
    const usuario=document.querySelector('input[name="usuario"]').value;
    const password=document.querySelector('input[name="password"]').value;
    const nombre=document.querySelector('input[name="nombre"]').value;
    const apellidos=document.querySelector('input[name="apellidos"]').value;
    const email=document.querySelector('input[name="email"]').value;
    const telefono=document.querySelector('input[name="telefono"]').value;
    const direccion=document.querySelector('input[name="direccion"]').value;
    const paypal=false;
    const visa="0000000000000000";
    const fecha="10/27";
    const csv="000";

    // Creamos un solo objeto cliente asignando los datos. Ahorramos poner el nombre de la variable al ser la misma    
    const cliente={
        numero: Math.random().toString().substring(14), // los 4 últimos
        usuario,
        password,
        nombre,
        apellidos,
        email,
        telefono,
        direccion,
        paypal,
        visa,
        fecha,
        csv
        };
    //Agregamos el nuevo cliente a la lista
    //Verificamos que esten todos los datos introducidos(si no hemos hecho click en el submit).
    if(nombre && apellidos && email && telefono && direccion){
        listaclientes.push(cliente);
        guardarclientes();// se guardan en el localstore
        document.getElementById("nuevoclienteform").reset();//llama al formulario hacer reset.
    }
}

//Borra el local store.
function borrarlocalstorage(){
    //localStorage.removeItem("clientesproyecto");// elimina el localstore totalmente.
    listaclientes=[];
    guardarclientes();//deja el localstore sin datos
    //console.log("local storage borrado");
    location.reload();//Recargar la página para que se actualice.
}

//inyectamos el listados de clientes en el parrafo de la página listadoclientes.
//Hemos definido en el css, la clase client para darle formato al listado.
function listarclientes(){
    var posinyect=document.getElementById("inyect");//Buscamos la marca donde vamos a inyectar el código
    posinyect.innerHTML="";
    listaclientes.forEach(element => {
        posinyect.innerHTML +=`
        <div class="client">
            <h3>Cliente número ${element.numero}</h3>
            <p>Usuario: ${element.usuario}</p>
            <p>Contraseña: ${element.password}</p>
            <p>Nombre: ${element.nombre}</p>
            <p>Apellidos: ${element.apellidos}</p>
            <p>Email: ${element.email}</p>
            <p>Telefono: ${element.telefono}</p>
            <p>Dirección: ${element.direccion}</p>
        </div>`
        //console.log("se han listado los clientes");
    });
    posinyect.innerHTML +=`
        <button type="submit" onclick="borrarlocalstorage()">Borrar datos</button>
        `
}

//ntipo:0 todos, 1=portatiles, 2=sobremesa, 3=monitores
function listProducts(ntipo){
    var posinyect=document.getElementById("inyect-Laptops");//Buscamos la marca donde vamos a inyectar el código
    if(productos.length>0){
        posinyect.innerHTML='<div class="gallery">';
        productos.forEach(element => {
            if(ntipo==0 || ntipo==element.tipo){
                posinyect.innerHTML +=`
                <article>
                    <img src="../img/${element.imagen}" alt="foto de ${element.imagen}">
                    <h2>${element.precio} €</h2>
                    <h2>${element.modelo}</h2>
                    <h2>Ref. ${element.numero}. Uds. ${element.unidades}. <a href="#"> Comprar</a></h2>
                    <p>${element.descripcion}</p>
                </article>
                <br><br>`
            }
            //console.log("se han listado los clientes");
        });
        posinyect.innerHTML +='</div>';
    }

 /*    posinyect.innerHTML +=`
        <button type="submit" onclick="borrarlocalstorage()">Borrar datos</button>
        ` */
}

//Aumenta la imagen
function bigImg(x) {
    imgy=x.style.height;//.substring(0, x.style.height.length - 2);
    imgx=x.style.width;//.substring(0, x.style.width.length - 2);
    //console.log(x.style.height,imgx,imgy);
    //x.style.height *= 8/100;
    //x.style.width *= 8/100;
    x.style.border="1px";
  }

//Restaura la imagen original  
  function normalImg(x) {
    x.style.height = imgy;
    x.style.width = imgx;
  }

function textCircle(id){
    circle = document.getElementById(id)
    circlearray = circle.textContent.split('')
    circle.textContent = ''
    for(var i = 0; i< circlearray.length; i++){
        circle.innerHTML += '<span style="transform:rotate('+ ((i+1)*10)+'deg)">'+ circlearray[i]+'</span>'
    }
}

//Prueba para generar texto en forma de circulo.
//textCircle("circle");

