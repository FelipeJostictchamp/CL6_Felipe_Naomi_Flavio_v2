// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;

document.getElementById("form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");
    var nameInput = document.getElementById("name");
    var vornameInput = document.getElementById("vorname");

    if (emailInput.value === '' || nameInput.value === '' || vornameInput.value === '') {
      alert('Bitte füllen Sie alle Pflichtfelder aus');
      event.preventDefault();
    } else { 
        submitButton.disabled = false;
    }
  });

// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
nameField.addEventListener("keyup", () => {
  onChangeEmailField();
});
vornameField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});





const onClickSubmit = async () => {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "cl6", // SQL Gruppen Namen
    pw: "b900e1aa", // SQL Passwort
    tableName: "user", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      email: emailField.value,
      name: nameField.value,
      vorname: vornameField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, eine Dankeschön Nachricht erscheint
  formContainer.classList.add("hidden");
  thankYouContainer.classList.remove("hidden");
};
