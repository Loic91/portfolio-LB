// !!!!! FAIRE BOUGER UN CONTAINER AU MOUVEMENT DE LA SOURIS

let button = document.getElementsByClassName('button');

//quand on bouge la souris on veut qu'il y est une fonction qui parte 
document.onmousemove = function() {

    //"client" suivit de X ou Y correspond à la position de la souris de l'utilisateur 
    // 30 correspond à la puissance du mouvement
    let x = event.clientX * 30 / window.innerWidth + "%";
    let y = event.clientY * 30 / window.innerHeight + "%";

    for (let i = 0; i < 1; i++) {
        button[i].style.left = x;
        button[i].style.top = y;
        button[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }

    console.log("x =" + x);
    console.log("y =" + y);
}