// Formularfelder abrufen
const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const vornameField = document.getElementById("vorname");
const submitButton = document.getElementById("submit");


// Fehlermeldungselemente abrufen
const emailError = document.getElementById("emailError");
const nameError = document.getElementById("nameError");
const vornameError = document.getElementById("vornameError");


// Funktion zur Überprüfung der Felder und Aktivierung des Submit-Buttons
const validateForm = () => {
  // Überprüfen, ob alle Felder ausgefüllt sind
  const emailValue = emailField.value.trim();
  const nameValue = nameField.value.trim();
  const vornameValue = vornameField.value.trim();


  // Überprüfen und Anzeigen der Fehlermeldungen

  if (emailValue === "") {
    emailError.textContent = "Please enter your email.";
  } else {
    emailError.textContent = "";
  }
  if (nameValue === "") {
    nameError.textContent = "Please enter your last name.";
  } else {
    nameError.textContent = "";
  }
  if (vornameValue === "") {
    vornameError.textContent = "Please enter your first name.";
  } else {
    vornameError.textContent = "";
  }

  // Überprüfen, ob alle Felder ausgefüllt sind, um den Submit-Button zu aktivieren
  if (emailValue !== "" && nameValue !== "" && vornameValue !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};




// Event Listener für die Eingabefelder hinzufügen
emailField.addEventListener("keyup", validateForm);
nameField.addEventListener("keyup", validateForm);
vornameField.addEventListener("keyup", validateForm);

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