document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let motivo = document.getElementById("motivo").value;
    let correo = document.getElementById("correo").value;
    
    if(nombre && motivo && correo) {
        alert("Formulario enviado correctamente\nNombre: " + nombre + "\nMotivo: " + motivo + "\nCorreo: " + correo);
    } else {
        alert("Por favor, complete todos los campos.");
    }
});