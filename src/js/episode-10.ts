// Programme qui affectue une remise sur les achats de l'utilisateur
const netAPayer : number = Number(prompt('Entrez le montant que vous devez payer : ')); //L'utilisateur saisie le montant de sa facture
    if (netAPayer < 0) { //Si l'utilisateur entre une valeur inférieure à 0 on lui indique une erreur
        alert('Entrée invalide');
    } else if (netAPayer >= 0 && netAPayer <= 40000) { //Si le montant à payer est compris entre 0 et 40000, l'utilisateur ne bénéficie d'aucune remise sur sa facture
        alert("Votre facture s'élève à  " + netAPayer + "  FCFA , Désolé mais il n'y a aucune remise pour vous.")
    } else {       //Au contraire si le monatnt de sa facture est srtitement superieure à 40000 alors il bénéficie de la remise sur le montant qu'il doit payer en caisse
        alert("Votre facture s'élève à " + (netAPayer - ((netAPayer * 10)/100 )) + ' FCFA, Bravo vous avez bénéficié de 10% de remise sur votre facture.') //On a calculer directement le montant avec remise au lieu d'encore utiliser une variable
    }