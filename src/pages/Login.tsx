import styles from '../css/login.module.css';
function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = Object.fromEntries(new window.FormData(event.target));
    console.log(inputData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="username" placeholder="Inserte usuario" />
        <input
          type="password"
          name="password"
          placeholder="Inserte contraseña"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
