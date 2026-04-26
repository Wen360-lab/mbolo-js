// Programme qui demande à l'utilisateur son nom ainsi que son sexe pour l'appeler en focntion de ces critères
const name : string = prompt('Quel est votre nom ? ')!;
const sexe : string = prompt('Quel est votre sexe (M ou F) ? ')!;
    if (sexe !== "M" && sexe !== "F") { //On vérifie les erreurs d"entrée, si l'utilisateur tape autre chose que M ou F alors on affiche une erreur de saisie
        alert('Entrée invalide. Veillez recommencer'); //Le message d'erreur
    } else if (sexe === 'M') { //Si le sex que l'utilisateur a entré est M alors on dit Bonjour monsier ...
        alert('Bonjour ' + ' monsieur ' + name);
        } else {                    // Dans le cas contraire si l'utilisateur entre F alors on affihera Bonjour madame ... 
            alert('Bonjour ' + ' madame ' + name);
          }