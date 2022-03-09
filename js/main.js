function longueur(){

    var ooo = document.getElementById('ooo').value;
    console.log("Vous avez saisi ce mot " + ` ${ooo} ` + "il a " + `${ooo.length}` +" caracteres");
    document.getElementById("afficher2").innerHTML = `${ooo.length}`

    compterMot()

}

function compterMot() { 
    var mots = document.getElementById("ooo").value; 
    var nombre = 0; 
    var split = mots.split(' ');
    console.log(split.length)

    for (var i = 0; i < split.length; i++)
    { 
        if (split[i] != "") 
        { 
            nombre += 1; 
        } 
    }
    document.getElementById("afficher").innerHTML = nombre; 
}