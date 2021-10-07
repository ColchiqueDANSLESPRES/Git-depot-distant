// bouton "index" envoye vers Index
var bouton1= document.getElementById("boutonIndex");
bouton1.addEventListener("click",clickIndex);

function clickIndex(){
    window.location.href="index.html"
}


// bouton "Reactualiser" redemarre l'exercice
var bouton1= document.getElementById("reactualiser");
bouton1.addEventListener("click",clickreact);

function clickreact(){
    window.location.href="ageInteraction.html"
}



// déclaration de variables

var age = window.prompt ("Quel est votre age ?\n Un age centenaire ou \nannuler affiche les résultats");
var mineur=0;
var adulte=0;
var senior=0;


// ajoute +1 au premier nombre avant boucle
if (age<=20 && age!=null)
    {mineur=mineur+1};

if (age>=20 && age<=40)
    {adulte++};

if (age>40 && age<100)
    {senior++};

// boucle 
while (age<100 && age!=null )
{
    console.log (mineur,adulte ,senior) 
    
    var age=window.prompt ("quel est votre age ?\n Un age centenaire ou \nannuler affiche les résultats")

        if (age!=null && age<20 )
        {mineur=mineur+1};

        if (age>=20 && age<=40)
        {adulte++};

        if (age>40 && age<100)
        {senior++};

} ;

// affichage dans doc Html
var nombre = mineur+adulte+senior;

document.getElementById("nombre").innerHTML=nombre;
document.getElementById("adulte").innerHTML=adulte;
document.getElementById("senior").innerHTML=senior;
document.getElementById("mineur").innerHTML=mineur;



//Animation

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