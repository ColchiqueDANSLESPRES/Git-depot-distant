
// bouton "index" envoye vers exercice "age"
var bouton1= document.getElementById("boutonIndex");
bouton1.addEventListener("click",clickIndex);

function clickIndex(){
    window.location.href="index.html"
}

// bouton "Reactualiser" redemarre l'exercice
var bouton1= document.getElementById("reactualiser");
bouton1.addEventListener("click",clickreact);

function clickreact(){
    window.location.href="age.html"
}



//  déclaration de variables
var age = window.prompt ("Quel est votre age ?\n Un age centenaire ou \nannuler affiche les résultats")

var mineur=0
var adulte=0
var senior=0


if (age<=20 && age!=null)
{mineur=mineur+1}

if (age>=20 && age<=40)
{adulte++}

if (age>40 && age<100)
{senior++}


// début boucle
while (age<100 && age!=null )
 {
    console.log (mineur,adulte ,senior) 
  
    var age=window.prompt ("quel est votre age ?\n Un age centenaire ou \nannuler affiche les résultats")
 
        if (age!=null && age<20 )
        {mineur=mineur+1}

        if (age>=20 && age<=40)
        {adulte++}

        if (age>40 && age<100)
        {senior++}

} 



// calcul nombre de saisie
var nombre = mineur+adulte+senior

// ecriture dans document HTMl
document.write (" Sur les "+nombre+" personne(s) qui ont saisie(s) leur age :")
if (mineur<=1)
    {document.write ( "Il y a "+ mineur+ " jeune." )}
        else
            {document.write ("Il y a "+ mineur+ " jeunes.")}

if (adulte<=1)
    {document.write ( " Il y a "+ adulte+ " moyen." )}
        else
            {document.write ( " Il y a "+ adulte+ " moyens.")}

if (senior<=1)
        {document.write ( " Il y a "+ senior+ " sénior." )}
            else
                {document.write (" Il y a "+ senior+ " séniors.")}
                

