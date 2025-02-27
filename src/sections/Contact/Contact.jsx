import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contate-nos</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu Nome"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Seu Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Sua Mensagem"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
