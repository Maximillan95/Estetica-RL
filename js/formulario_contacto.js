    var nombre = document.getElementById('nombre')
    var correo = document.getElementById('correo')
    var telefono = document.getElementById('telefono')


function ValidarDatos() {
    nombre.addEventListener('input', validarNombre)
    correo.addEventListener('input', validarCorreo)
    telefono.addEventListener('input', validarTelefono)


    validarNombre()
    validarCorreo()
    validarTelefono()
}

function validarNombre() {
    if(nombre.value == '') {
        nombre.setCustomValidity('Ingrese su nombre y apellido')
        //nombre.style.borderBlockColor = '#ff0000'
        //nombre.style.backgroundColor = '#ff8080'
    } else {
        //nombre.style.borderBlockColor = '#00ff80'
        //nombre.style.backgroundColor = '#99ffcc'
        nombre.setCustomValidity('')
    }
}

function validarCorreo() {
    if(correo.value == '') {
        correo.setCustomValidity('Ingrese un correo electrónico')
        //correo.style.borderBlockColor = '#ff0000'
        //correo.style.backgroundColor = '#ff8080'
    } else {
        //correo.style.borderBlockColor = '#00ff80'
        //correo.style.backgroundColor = '#99ffcc'
        correo.setCustomValidity('')
    }
}

function validarTelefono() {
    if(telefono.value == '') {
        telefono.setCustomValidity('Ingrese un número de contacto')
        //telefono.style.borderBlockColor = '#ff0000'
        //telefono.style.backgroundColor = '#ff8080'
    } else {
        //telefono.style.borderBlockColor = '#00ff80'
        //telefono.style.backgroundColor = '#99ffcc'
        telefono.setCustomValidity('')
    }
}



window.addEventListener('load', ValidarDatos)