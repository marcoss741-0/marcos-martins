import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Marcos Martins. <br />
        todos os direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
