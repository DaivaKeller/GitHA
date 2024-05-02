console.log ("Hello World");

// definiere die Funktion, um die Punktzahl zu bewerten
function bewertePunktzahl(punktzahl) {
    if (punktzahl >90) {
        console.log("sehr gut");
    } else if (punktzahl >= 80 && punktzahl <=90) {  
        console.log("gut");
    } else if (punktzahl >= 70 && punktzahl <80) {
        console.log("befriedigend"); 
    } else if (punktzahl >= 60 && punktzahl <70) {
        console.log( "ausreichend");
    } else { 
        console.log("nicht bestanden");


    }}
  // Rufe die Funktion mit einem Beispielwert für die Punktzahl auf var punktzahl = 75;
  bewertePunktzahl(95);


       

        


