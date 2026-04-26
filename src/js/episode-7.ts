// Programme qui demande l'âge à l'utilisateur et l'indique s'il est mineur ou majeur

const age : number = Number(prompt('Quel âge avez-vous ? ')); //On demande l'âge de l'utilisateur
   
    if (age < 1 || age > 120) { // Si l'âge de l'utilisteur est strictement inférieur à 1 ou strictement supérieur à 120 on aficche un message d'erreur
        alert('Entrée invaide');
    } else if (age >= 1 && age <= 17) { //Si l'âge de l'utilisateur est compris entre 1 et 17 alors on lui dit qu'il est mineur
        alert('Vous êtes mineur');
    } else {                           // Au contraire si l'âge n'est pas dans l'intervalle précédent alors il est focément majeur
        alert('Vous êtes majeur')
    }