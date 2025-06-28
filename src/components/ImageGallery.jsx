import { useState } from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.gallery}>
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Captura ${index + 1}`}
            className={styles.thumbnail}
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modalBackground} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Ampliada" className={styles.modalImage} />
        </div>
      )}
    </>
  );
}
