// bouton 1 envoye vers exercice "age"
var bouton1= document.getElementById("bouton1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){
    window.location.href="age.html"
}

// bouton 2 envoye vers exercice "Table Multiplication"
var bouton2= document.getElementById("bouton2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){
    window.location.href="ageInteraction.html"
}

// bouton 3 envoye vers exercice "Recherche prénom"
var bouton3= document.getElementById("bouton3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){
    window.location.href="tableMulti.html"
}

// bouton 4 envoye vers exercice "Total Commande"
var bouton4= document.getElementById("bouton4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4(){
    window.location.href="prenom.html"
}

// bouton 5 envoye vers exercice "formulaire"
var bouton5= document.getElementById("bouton5");
bouton5.addEventListener("click",clickbtn5);

function clickbtn5(){
    window.location.href="commande.html"
}

// bouton 6 envoye vers exercice "age" avec interaction entre JS et HTML
var bouton1= document.getElementById("bouton6");
bouton1.addEventListener("click",clickbtn6);

function clickbtn6(){
    window.location.href="formulaire.html"
}
// 


// Texte animation

const titre =document.querySelector("h2");
        titre.style.position = "absolute";
        let topPos =0;
        let dir=-1;
    
    function hautBas ()
    {   
        if (topPos == 200 ) {dir=1}
        else if (topPos == 0) {dir=-1}
        topPos += -2* dir;
        titre.style.top =`${topPos}px` ;
        requestAnimationFrame (hautBas);
    }
    requestAnimationFrame (hautBas);