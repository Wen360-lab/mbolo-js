// Programme qui affiche la table de multiplication d'un nombre entré au clavier par l'utilisateur

const nbre : number = Number(prompt('Veullez entrer un nombre dont vous voulez connaitre la table de multiplication : ')); //L'u
let result : string = ''; //La variable result stockera la la table de multiplication

 for(let i = 0; i <=10; i++) { //La boucle for va permettre d'incrémenter i pour qu' à chaque fois on passe à i+1 jusqu'à atteindre 10
    result = result + nbre + ' * ' + i + ' = ' + nbre*i + '\n'; //On met le résultat de chaque opération dans la variable result
}
    alert(result); //Enfin, on affiche le contenu de résult
 