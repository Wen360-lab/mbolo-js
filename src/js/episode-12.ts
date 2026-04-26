// Programme qui calcule la somme des 10 premiers nombre en partant de 1 

let som : number = 0; //On initialisa la varaible som à zéro

    for(let i = 1; i <= 10; i ++) {
        som = som + i; // À chaque incrémentation som reçoit son ancienne valeur ajouté de 1 jusqu'à la fin de la boucle, c'est-à-dire i = 10
    }

    console.log('La somme des 10 premiers nombres entiers est : ' + som); //On affiche le résultat en console