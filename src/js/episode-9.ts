// Programme qui demande la moyenne d'un élève et affcihe sa mention
const moy : number = Number(prompt('Veuillez entrer votre moyenne : ')); //L'utilisateur saisie sa moyenne
    if (moy < 0 || moy > 20) {                                           //Si cette moyenne est stictement inférieur à 0 et strictement supérieur à 20 
        alert('Entrée invalide. Veuillez recommancer');                  //On affiche un message d'erreur
    } else if (moy >= 0 && moy <= 11) {                                  //Si la moyenne est comprise entre 0 et 11 : Mention Passable
        alert('Mention passable');
    } else if (moy >=12  && moy <= 13) {                                 //Si la moyenne est comprise entre 12 et 13 : Mention Assez bien
        alert('Mention Assez');
    } else if (moy >= 14 && moy <= 15) {                                 //Si la moyenne est comprise entre 14 et 15 : Mention Bien
        alert('Mention Bien');
    } else if (moy >= 16 && moy <= 17) {                                 //Si la moyenne est comprise entre 16 et 17 : Mention Tres bien
        alert('Mention Très bien');
    } else if (moy >= 18 && moy <= 20) {                                 //Si la moyenne est comprise entre 18 et 20 : Mention Ecellent
        alert('Mention Excellent');
    }
    