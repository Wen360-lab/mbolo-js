// Programme qui demande deux nombres à l'utilisateur et effectue la somme de ces derniers

const nombre1 : number = Number(prompt('Entrez le premier nombre : ')); //On saisie le premier nombre et on vérifie son type (Number) avec Number
const nombre2 : number = Number(prompt('Entrez le deuxième nombre : ')); // On fait la même chose pour le deuxième noombre
const resultat : number = nombre1 + nombre2; //Ici on récupère le résulta de l'addition dans une variable resultat
    alert(nombre1 + ' + ' + nombre2 + ' = ' + resultat); // On affiche le résultat avec alert()