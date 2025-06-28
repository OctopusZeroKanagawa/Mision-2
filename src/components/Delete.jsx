import ImageGallery from "./ImageGallery";

export default function Delete() {
  const deleteImages = [
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751119100/Captura_de_pantalla_2025-06-28_013252_deg2f9.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751119101/Captura_de_pantalla_2025-06-28_013426_es4srz.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751119102/Captura_de_pantalla_2025-06-28_013535_mu6kfe.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751119103/Captura_de_pantalla_2025-06-28_013613_oa3okh.png"
  ];

  return (
    <main>
      <h3>Borrar datos</h3>
      <ImageGallery images={deleteImages} />
    </main>
  );
}
