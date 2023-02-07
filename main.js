//CAJERO SEGUNDA PRE ENTREGA

//CLASE USURARIO

class Usuario {
    constructor(usuario, contraseña, dni, saldo) {
        this.usuario= usuario;
        this.contraseña= contraseña;
        this.dni= dni;
        this.saldo= saldo
    }
}

const usuario1= new Usuario("Franco Sosa", 1234, 53098760, 125000);
const usuario2= new Usuario("Martin Nuñez", 3434, 42345009, 60000);
const usuario3= new Usuario("Lily Santos", 2001, 51069838, 100000);
const usuario4= new Usuario("Lionel Messi", 2022, 42372097,1000000);

const arrayUsuarios= [usuario1, usuario2, usuario3, usuario4];
console.log(arrayUsuarios);

//MENU

function menu(){
    alert("Bienvendio al Cajero NiUnMango");
    let opcion= parseInt(prompt("Seleccione una opción: \n 1) Registrarse \n 2) Eliminar Cuenta \n 3) Retiro \n 4) Depositar \n 5) Salir"));
    return opcion;
}

//FUNCION REGISTRO

function registroUsuario(){
    let nombre= prompt("Ingrese nombre del usuario: ");
    let contraseña= parseInt(prompt("Ingrese una contraseña: "));
    let dni= parseInt(prompt("Ingrese el dni del usuario: "));
    let saldo= parseInt(prompt("Ingrese el saldo del usuario: "));
    let usuario= new Usuario(nombre, contraseña, dni, saldo);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    alert(`Bienvenido ${nombre}`);
}

//FUNCION ELIMINAR CUENTA

function eliminarUsuario(){
    let dni = parseInt(prompt("Ingrese el DNI del usuario: "));
    let usuario = arrayUsuarios.find( usuario => usuario.dni === dni);
    let indice = arrayUsuarios.indexOf(usuario);
    arrayUsuarios.splice(indice, 1);
    console.log(arrayUsuarios);
}

//FUNCION RETIRO

function retiro(){
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "));
    let usuario= arrayUsuarios.find(usuario=>usuario.dni === dni)
    let monto= parseInt(prompt("Ingrese monto a retirar: "));
    this.nuevoSaldo= usuario.saldo - monto;
    alert("Su saldo restante es de: $" + this.nuevoSaldo);
    console.log(`El usuario ${usuario.usuario} retiró: $ ${monto}`);
}

//FUNCION DEPOSITO

function deposito(){
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "));
    let usuario= arrayUsuarios.find(usuario=>usuario.dni === dni)
    let monto= parseInt(prompt("Ingrese monto a depositar: "));
    this.deposito= usuario.saldo + monto;
    alert("Su saldo actual es de: $" + this.deposito);
    console.log(`El usuario ${usuario.usuario} depositó: $ ${monto}`);
}

//FUNCION SALIR

function salir(){
    alert("Gracias por utilizar nuestros servicios.");
}

//PROGRAMA

let opcion= menu();
switch (opcion){
    case 1:
        registroUsuario();
        break;
    case 2:
        eliminarUsuario();
        break;
    case 3:
        retiro();
        break;
    case 4:
        deposito();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opcion no valida");
        break;    
}