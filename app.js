let nombresAmigos = [];



const inputNombre = document.querySelector('#amigo');
const botonAgregar = document.querySelector('#btnAdd');
const botonSortear = document.querySelector('#btnSortear');
const listaAmigos = document.querySelector('#listaAmigos');
const resultadoSorteo = document.querySelector('#resultado');

const validarNombre = (nombre) => {
    if (nombre === '') {
        alert('Ingrese un nombre');
        return false;
    }
    return true;
}

const agregarAmigo = () => {
    const nombre = inputNombre.value.trim();
    if(validarNombre(nombre)){
        nombresAmigos.push(nombre);
        inputNombre.value = '';
        console.log(nombresAmigos);
        mostarAmigos();
        actualizarBotonSortear();
    }
}

const mostarAmigos = () => {
    listaAmigos.innerHTML = '';
    nombresAmigos.forEach((nombre) => {
        const creaLi = document.createElement('li');
        creaLi.textContent = nombre;
        listaAmigos.appendChild(creaLi);
    });
}

const generaNumeroAleatorio =  (cantidaDeAmigos) => {
    let numeroGenerado = Math.floor(Math.random() * cantidaDeAmigos);
    return numeroGenerado;
}
 const sortearAmigo = () => {      
    let amigosorteado = nombresAmigos[generaNumeroAleatorio(nombresAmigos.length)];
    console.log(amigosorteado);
    resultadoSorteo.textContent = `El amigo secreto es: ${amigosorteado}`;
    listaAmigos.innerHTML = '';
    nombresAmigos = [];
    actualizarBotonSortear();
 }

 const actualizarBotonSortear = () => {
    botonSortear.disabled = nombresAmigos.length === 0; // Se activa solo si hay elementos en el array
}


botonAgregar.addEventListener('click', agregarAmigo);
botonSortear.addEventListener('click', sortearAmigo);

