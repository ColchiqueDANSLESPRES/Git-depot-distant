// bouton "index" envoye vers Index
var bouton1= document.getElementById("boutonIndex");
bouton1.addEventListener("click",clickIndex);

function clickIndex(){
    window.location.href="index.html"
}

// bouton "Reactualiser" redemarre l'exercice
var bouton2= document.getElementById("reactualiser");
bouton2.addEventListener("click",clickreact);

function clickreact(){
    window.location.href="prenom.html"
}




// Exercice Recherche de prénom 

var Tab =[ "Audrey","Aurélien","Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"] ;
console.log (Tab);

document.getElementById("tableau").innerHTML=Tab;

let prenom= window.prompt ("tableau initial comporte \nAudrey,Aurélien,Flavien,Jérémy,Laurent,\nMelik,Nouara,Salem,Samuel,Stéphane. \n\n Quel prénom ?");

if (Tab.indexOf (prenom) ===-1)
{ let Found =(prenom +" n'a pas été trouvé. Le tableau reste inchangé");
document.getElementById ("found").innerHTML=Found ;
}
else {
    let Found=(prenom+" a été trouvé et supprimé du tableau.");
    
document.getElementById ("found").innerHTML=Found ;   

delete Tab[prenom]
Tab.push (" ")
Tab[Tab.indexOf (prenom)]= null



 nouveauTab.textContent = ("Le nouveau tableau donne :"+Tab);
 nouveauTab.style.color ='red';
}






