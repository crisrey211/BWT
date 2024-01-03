import styles from '../css/footer.module.css';
function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div>AQUI VA EL ICONO</div>
        <div>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div>© 2023 Flowbite™. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
