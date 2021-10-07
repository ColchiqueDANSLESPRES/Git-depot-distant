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
    window.location.href="formulaire.html"
}


// vérification de formulaire 

        let formValid = document.getElementById('btn_envoyer');

/////////////////////////////////////////////////////////////////////////
//  DECLARATION VARABLES POUR CONTROLE CHAMP VIDE                   //
/////////////////////////////////////////////////////////////////////////

// Variable Prénom/PrenomManquant
        let prenom = document.getElementById('prenom');
        let prenomManquant = document.getElementById('prenomManquant');
        let prenomValid = /^[a-zA-Z]+$/;
         
// Variable Nom/NomManquant
        let nom = document.getElementById('nom');
        let nomManquant = document.getElementById('nomManquant');
        let nomValid = /^[a-zA-Z]+$/;

// Variable date de naissance
        let bday= document.getElementById('bday');
        let nobday = document.getElementById('nobday');
        let bdayValid = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

//Variable choix du sexe
        let sexeH=document.getElementById('homme').checked;
        let sexeF=document.getElementById('femme').checked;
        let sexeN=document.getElementById('neutre').checked;

// Variable Code Postal/codePostalManquant
        let postal = document.getElementById('postal');
        let postalManquant = document.getElementById('postalManquant');
        let postalValid = /^[0-9]{5}$/;

// Variable adresse/adresseManquant
        let adresse = document.getElementById('adresse');
        let adresseManquant = document.getElementById('adresseManquant');
        let adresseValid = /^[\s0-9a-zA-Z]+$/;

// Variable ville/villeManquant
        let ville = document.getElementById('ville');
        let villeManquant = document.getElementById('villeManquant');
        let villeValid = /^[-/a-zA-Z]+$/;

// Variable email/emailManquant
        let mail = document.getElementById('mail');
        let mailManquant = document.getElementById('mailManquant');
        let mailValid = /^[0-9a-zA-Z]+[@]+[0-9a-zA-Z]+[.]+[a-zA-z]{2,3}$/;

// variable checkbox accepte 
        let accepte=document.getElementById ('accepte').checked;
        let sujet=document.getElementById ('sujet').value;

// controle par Click
        formValid.addEventListener('click', validation);

////////////////////////////////////////////////////////////////////////////
//  function Validation  -controle champs vide et conditions              //
////////////////////////////////////////////////////////////////////////////

function validation(event){
// Nom ////////// 
        if (nom.validity.valueMissing)
        {
        event.preventDefault();
        nomManquant.textContent = 'Le nom est manquant.';
        nomManquant.style.color = 'red';
        }
        else if (nomValid.test(nom.value) == false)
        {
        event.preventDefault();
        nomManquant.textContent = 'Format incorrect pour le nom (a-zA-z autorisé).';
        nomManquant.style.color = 'orange';
        }else {
        }

// Prénom /////////
    if (prenom.validity.valueMissing)
        {
        event.preventDefault();
        prenomManquant.textContent = 'Le prénom est manquant.';
        prenomManquant.style.color = 'red';
        }
        else if (prenomValid.test(prenom.value) == false)
        {
        event.preventDefault();
        prenomManquant.textContent = 'Format incorrect pour le prénom (a-zA-Z autorisé).';
        prenomManquant.style.color = 'orange';
        }else {
        }
       
// Date de naissance //////////

        if (bday.validity.valueMissing)
        {
        event.preventDefault();
        nobday.textContent = 'La date de naissance est manquante.';
        nobday.style.color = 'red';
        }
        else if (bdayValid.test(bday.value) == false)
        {
        event.preventDefault();
        nobday.textContent = 'Format incorrect pour la date( type jj/mm/aaaa requis).';
        nobday.style.color = 'orange';
        }else {
        }


// Code postal //////////
if (postal.validity.valueMissing)
        {
        event.preventDefault();
        postalManquant.textContent = 'Le code postal est manquant.';
        postalManquant.style.color = 'red';
        }
        else if (postalValid.test(postal.value) == false)
        {
        event.preventDefault();
        postalManquant.textContent = 'Format incorrect pour le code postal (0-5 autorisé, 5 chiffres obligatoires).';
        postalManquant.style.color = 'orange';
        }else {
        }

// adresse /////////
        if (adresse.validity.valueMissing)
        {
        event.preventDefault();
        adresseManquant.textContent = "L'adresse est manquante.";
        adresseManquant.style.color = 'red';
        }
        else if (adresseValid.test(adresse.value) == false)
        {
        event.preventDefault();
        adresseManquant.textContent = "Format incorrect pour l'adresse (0-9 et a-zA-Z autorisé).";
        adresseManquant.style.color = 'orange';
        }else {
        }

// ville //////////
        if (ville.validity.valueMissing)
        {
        event.preventDefault();
        villeManquant.textContent = 'La ville est manquante.';
        villeManquant.style.color = 'red';
        }
        else if (villeValid.test(ville.value) == false)
        {
        event.preventDefault();
        villeManquant.textContent = "Format incorrect pour la ville (a-zA-Z et - / autorisé).";
        villeManquant.style.color = 'orange';
        }else {
        }

// Email //////////
        if (mail.validity.valueMissing)
        {
        event.preventDefault();
        mailManquant.textContent = 'Le courriel est manquant.';
        mailManquant.style.color = 'red';
        }
        else if (mailValid.test(mail.value) == false)
        {
        event.preventDefault();
        mailManquant.textContent = "Format incorrect pour le courriel (type pseudo@operateur.xxx).";
        mailManquant.style.color = 'orange';
        }else {
        }

// Controle case sexe //////////
        if (sexeH == false && sexeF == false && sexeN == false)
        {
        sexeManquant.textContent ="Veuillez cocher une case.";
        sexeManquant.style.color ="red"}

// controle checkbox "accepte" //////////
        if (accepte == false)
        { accepteManquant.textContent = "Veuillez cocher la case.";
        accepteManquant.style.color ="red";
}

if(sujet == 1)
    {
        sujetManquant.textContent ="Veuillez selectionner un sujet.";
        sujetManquant.style.color ="red";
    }

}//fermeture function valider

