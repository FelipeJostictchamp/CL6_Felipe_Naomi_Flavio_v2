// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const thankYouContainer = document.getElementById("thankYouContainer");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const emailField = document.getElementById("email");
const nameField = document.getElementById("name");
const vornameField = document.getElementById("vorname");

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

// (3) Interaktionen Code
const onChangeEmailField = () => {
  if (emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onChangenameField = () => {
  if (nameField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onChangevornameField = () => {
  if (vornameField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

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
