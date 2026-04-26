// Programme qui demande sans cesse une bonne réponse à une opération 

let result : number = 20, choix : number = 0; //On déclare les variables result et choix
    do {
      choix = Number(prompt('Combien font 10 + 10 ? ')); // On demande une première fois à l'utilisateur la bonne réponse, qui est strockée dans choix
    }
    while (result !== choix); //On commpare et on vérifie que le résultat est bien égale à la réponse de lutilisateur, sinon on relance la boucle en redemandant la bonne réponse

        alert('Bravo ! Tu as trouvé.'); //On affiche un message pour dire à l'utilisateur qu'il a trouvé la bonne réponse 