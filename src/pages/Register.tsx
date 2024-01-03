import styles from '../css/register.module.css';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = Object.fromEntries(new window.FormData(event.target));
    //TODO: BORRAR CONSOLE
    console.log(inputData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Inserte nuevo usuario"
        />
        <input type="text" name="name" placeholder="Inserte nombre" />
        <input type="email" name="email" placeholder="Inserte email" />
        <input type="text" name="country" placeholder="Inserte país" />
        <input
          type="password"
          name="password"
          placeholder="Inserte contraseña"
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Inserte número de teléfono"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Register;
