import bcrypt from 'bcrypt';

const passwordFromUser = "strongpassword123"; // Contraseña que usó el usuario
const hashFromDatabase = "$2b$10$i2dcBYF.Nm9jlI3lCDzOV.0TmkmP/mdOW3HDPrKvWs5auQzQfots."; // Hash almacenado

bcrypt.compare(passwordFromUser, hashFromDatabase)
  .then((result) => {
    if (result) {
      console.log('¡Las contraseñas coinciden!');
    } else {
      console.log('Las contraseñas NO coinciden.');
    }
  })
  .catch((error) => {
    console.error('Error comparando las contraseñas:', error);
  });
