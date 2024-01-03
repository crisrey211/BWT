import miImagen from '../../public/images/burguer-contact.jpg';
import '../css/contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new window.FormData(event));
  };

  return (
    <div>
      <h1>Contact page</h1>
      <div className="main">
        <div className="imagen-limitada">
          <img alt="burguer on the table" src={miImagen} />
        </div>
        <form onSubmit={handleSubmit} className="formulario">
          <input
            type="text"
            name="name"
            placeholder="Inserte nombre completo"
          />
          <input type="email" name="email" placeholder="Inserte email" />
          <textarea name="comment" placeholder="Inserte Reseña" />
          <button type="submit">Enviar</button>
        </form>
        <div>
          <div>
            <h4>Contact</h4>
            <span>Contact</span>
          </div>
          <div>
            <h4>Based in Bizkaia, Durango</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
