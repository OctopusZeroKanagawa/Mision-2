import styles from "./ModeloER.module.css";

export default function ModeloER() {
  const imageUrl = "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751112565/Untitled_j9it13.png";

  return (
    <main>
      <h2>Modelo Entidad-Relación</h2>
      <div className={styles.wrapper}>
        <img src={imageUrl} alt="Modelo ER" className={styles.img} />
      </div>
    </main>
  );
}


  