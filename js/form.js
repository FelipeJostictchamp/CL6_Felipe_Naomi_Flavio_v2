// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const submitButton = document.getElementById("submit");


const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const vornameField = document.getElementById("vorname");

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  onClickSubmit();
});

// (2) Interaktionen festlegen

const onClickSubmit = () => {
  // Überprüfen der Felder nach dem Klick auf "Senden"
  if (emailField.value === '' || nameField.value === '' || vornameField.value === '') {
    alert('Bitte füllen Sie alle Pflichtfelder aus');
  } else if (nameField.value.length < 2) {
    alert('Der Name muss mindestens 2 Buchstaben enthalten');
  } else if (!isValidEmail(emailField.value)) {
    alert('Bitte geben Sie eine gültige E-Mail-Adresse ein');
  } 
    
    // Daten aus dem Formular für die Datenbank bereitstellen
    const data = {
      group: "cl6", // SQL Gruppen Namen
      pw: "b900e1aa", // SQL Passwort
      tableName: "user", // Name der Tabelle in der SQL Datenbank
      columns: {
        email: emailField.value,
        name: nameField.value,
        vorname: vornameField.value,
      },
    };
  
    // Speichert die Daten in der Datenbank
    databaseClient.insertInto(data)
      .then(() => {
        // Nach dem Speichern verschwindet das Formular, eine Dankeschön-Nachricht erscheint
        formContainer.style.display = "none";
        thankYouContainer.style.display = "block";
      })
      .catch(() => {
        // Fehler beim Speichern in der Datenbank
        alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      });
  }
};   
