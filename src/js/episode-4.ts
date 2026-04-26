// Programme qui permet de permutter les vzleurs de deux variables. Le résultat en console

let a : number = 15, b : number = 100, temp; //On initialise les variables avec des valeurs bien définies et on crée un variable temporaire temp pour gérer la permutation

    console.log('Valeurs de a et b respectivement avant la permutation : ' + a + ' ' + b); //Avant permutation
        temp = a; //temp reçoit la valeur de a
        a = b; //La variable a étant maintenant vide , elle peut recevoire la valeur de b
        b = temp; //La varaible b étant vide, elle reçoit maintenant la valeur de temp qui n'est autre que la valeur de a 
    console.log('Valeurs de a et b respectivement après la permutation : ' + a + ' ' + b); //Après premutation
