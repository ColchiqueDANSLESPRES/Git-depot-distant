// bouton "index" envoye vers exercice "age"
    var bouton1= document.getElementById("boutonIndex");
    bouton1.addEventListener("click",clickIndex);

    function clickIndex()
    {
        window.location.href="index.html"
    }

// bouton "Reactualiser" redemarre l'exercice
var bouton2= document.getElementById("reactualiser");
bouton2.addEventListener("click",clickreact);

function clickreact(){
    window.location.href="commande.html"
}

// saisie des variables et calcul du total

    var PU=window.prompt("Quel est le prix unitaire ?");
    var QTECOM=window.prompt ("Quelle quantité souhaitez vous ? ");
    
    var TOTFDP=0  ;
    var TOT= (PU*QTECOM);
    var remise=0;
    var FDP=0;
    var totfinal=0;

// controle des conditions
    if (TOT>=100 && TOT<=200)
    {
        remise=((TOT/100)*5)
    }
    else if (TOT>200)
    {
        remise= ((TOT/100)*10)
    }
    else if (TOT<100)
    {
    remise=0
    }
    totfinal=(parseFloat(TOT-remise));


// calcul frais de port
    if (totfinal <500)
    {
        FDP=(parseFloat(totfinal*0.02)); 
            if (FDP<6)
            { 
                FDP=6
            }
    } 
    if (totfinal>500)
        {
            FDP=0
        }

// calcul total final 
    TOTFDP=(parseFloat(totfinal+FDP));

//  affichage dans document HTML

    document.getElementById("QTECOM").innerHTML=QTECOM;
    document.getElementById("prixu").innerHTML=PU;
    document.getElementById("prixfin").innerHTML=TOTFDP.toFixed(2);
    document.getElementById("remise").innerHTML=remise;
    document.getElementById("fraisDP").innerHTML=FDP.toFixed(2);