import '../css/login.css';
function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = Object.fromEntries(new window.FormData(event.target));
    console.log(inputData);
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <input
            type="text"
            name="username"
            placeholder="Inserte usuario"
            required
          />
          <label>Username</label>
        </div>
        <div className="question">
          <input
            type="password"
            name="password"
            placeholder="Inserte contraseña"
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
