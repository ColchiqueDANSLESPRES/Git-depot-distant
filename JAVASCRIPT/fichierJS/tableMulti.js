// bouton "index" envoye vers Index
    let bouton1= document.getElementById("boutonIndex");
    bouton1.addEventListener("click",clickIndex);

    function clickIndex(){
        window.location.href="index.html"
    }


// bouton "Reactualiser" redemarre l'exercice
var bouton2= document.getElementById("reactualiser");
bouton2.addEventListener("click",clickreact);

function clickreact(){
    window.location.href="tableMulti.html"
}

/////////////////////////////////////
// Exercie Table de Multiplication //
/////////////////////////////////////

// definition de la table
    let table=window.prompt("Quelle table souhaitez-vous?")
  
// creation de la function   
    let multi = function (n) {
   
        return table*i;
}
   

// Création de la boucle 
    for (i=0;i<=10;i++)
    { 
        document.writeln( i+"*"+table+"="+(multi(table))+"  ;"); 
    }




























// var table= prompt ("Quelle table souhaitez-vous ? ")

// document.getElementById("table").innerHTML=table

// // boucle


// // function Multi()
// // {
// //     for (i=0;i<=10;i++)
// //         { result=(i*table);
// //         console.log(result)
    
// //     }
// // }

// // return function
// for (i=0;i<=10,i++)
// {
// let result =function (table)
// { 
    
//     return (i*table)

// }}
// console.log(table)