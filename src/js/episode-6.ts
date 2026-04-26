// Programme qui demande à l'utilisateur de saisir 3 nombres et d'afficher la moyenne de ces derniers

const nbre1 : number = Number(prompt('Entrez le premier nombre : ')); //Premier nombre
const nbre2 : number = Number(prompt('Entrez le deuxième nombre : ')); //Deuxième nombre
const nbre3 : number = Number(prompt('Entrez le troisième nombre : ')); //Troisième nombre
const moy : number = (nbre1 + nbre2 + nbre3) / 3; //Constante qui reçoit la moyenne
    alert('La moyènne est de : ' + moy); //On affiche la moyenne