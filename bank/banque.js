
var donnees = {
    "operations" : [
        {"date":"03/11/2018" , "debit" : true, "montant" : 500},
        {"date":"04/11/2018" , "debit" : false, "montant" : 800},
        {"date":"05/11/2018" , "debit" : true, "montant" : 100},
        {"date":"02/11/2018" , "debit" : false, "montant" : 1000},
        {"date":"01/11/2018" , "debit" : true, "montant" : 600}
    ]
};

// En supposant que vous ayez un élément HTML avec la classe "table" où vous souhaitez insérer le tableau.
let myBoard = document.querySelector("tbody");
 let operation = donnees.operations;

// Parcourez le tableau "operations"
for (let i = 0; i < operation.length; i++){
    let current = operation[i];
    let date = current.date;
    let debit = current.debit;
    let montant = current.montant;
    


    // Créez une nouvelle ligne de tableau
    let newLigne = document.createElement("tr");
    
    

    // Créez des cellules de tableau pour la date, le débit et le montant
    let dateCell = document.createElement("td");
    dateCell.textContent = date;

    let debitCell = document.createElement("td");
    debitCell.textContent = debit ? "Débit" : "Crédit";

    let montantCell = document.createElement("td");
    montantCell.textContent = montant;

    let deleteCell = document.createElement("td");
    deleteCell.innerHTML = '<span class="hand  rouge glyphicon glyphicon-remove" id="0"></span>';
    deleteCell.style.color = "red";
    

    // Ajoutez les cellules à la ligne
    newLigne.appendChild(dateCell);
    newLigne.appendChild(debitCell);
    newLigne.appendChild(montantCell);
    newLigne.appendChild(deleteCell);


    // Ajoutez la ligne au tableau
    myBoard.appendChild(newLigne);
}