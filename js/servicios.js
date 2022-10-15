var servicioA = confirm("¿Le interesa el servicio de UÑAS?")
var servicioB = confirm("¿Le interesa el servicio de CEJAS?")
var servicioC = confirm("¿Le interesa el servicio de PESTAÑAS?")

if (servicioA){
    document.getElementById("servUnhas").innerHTML = ("<p class='info_servv'><strong>Uñas:</strong><br>semi permanente, kapping gel y esculpidas</p>")
}

if (servicioB){
    document.getElementById("servCejas").innerHTML = ("<p class='info_servv'><strong>Cejas:</strong><br>perfilado, perfilado + henna</p>")
}

if (servicioC){
    document.getElementById("servPestanhas").innerHTML = ("<p class='info_servv'><strong>Pestañas:</strong><br>extensiones y lifting</p>")
}