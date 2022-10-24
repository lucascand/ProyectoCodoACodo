function validar(){
    var Nombre, Apellido, Email, Consulta, expresion;
    Nombre = document.getElementById("Nombre").value;
    Apellido = document.getElementById("Apellido").value;
    Email = document.getElementById("Email").value;
    Consulta = document.getElementById("Consulta").value;

    if(Nombre === "" || Apellido === "" || Email === "" || Consulta === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
else if (Nombre.length<3) { 
    alert("El nombre es muy corto");
    return false;
}
else if (Apellido.length<2) {
    alert("El Apellido es muy corto");
    return false;
}
}