export default function Validate(usernameReg, passwordReg, emailReg) {
  let errors = {};

  if (usernameReg.trim()) {
    errors.usernameReg = "Requiere un apodo";
  }

  if (emailReg) {
    errors.emailReg = "Requiere un email";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(emailReg)) {
    errors.emailReg = "Introduce un direccion valida";
  }

  if (passwordReg) {
    errors.passwordReg = "Requiere una contraseña";
  } else if (passwordReg.length < 6) {
    errors.passwordReg = "Introduce un direccion valida";
  }
  return errors;
}
