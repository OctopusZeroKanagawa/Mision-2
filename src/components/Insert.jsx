import ImageGallery from "./ImageGallery";

export default function Insert() {
  const insertImages = [
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118554/Captura_de_pantalla_2025-06-28_010834_wd2co0.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118554/Captura_de_pantalla_2025-06-28_010714_zxxyxs.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118554/Captura_de_pantalla_2025-06-28_010758_d2r5vo.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118577/Captura_de_pantalla_2025-06-28_010906_rjmwfa.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118578/Captura_de_pantalla_2025-06-28_011142_sotk7t.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118578/Captura_de_pantalla_2025-06-28_011314_wbaeca.png",
  ];

  return (
    <main>
      <h3>Insertar datos</h3>
      <ImageGallery images={insertImages} />
    </main>
  );
}
