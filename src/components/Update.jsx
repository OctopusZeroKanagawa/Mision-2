import ImageGallery from "./ImageGallery";

export default function Update() {
  const updateImages = [
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118877/Captura_de_pantalla_2025-06-28_011957_hb4pi2.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118878/Captura_de_pantalla_2025-06-28_012043_hubvdf.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118880/Captura_de_pantalla_2025-06-28_012536_qlhte7.png",
    "https://res.cloudinary.com/ddrmlazkc/image/upload/v1751118880/Captura_de_pantalla_2025-06-28_012421_mskn4y.png",

  ];

  return (
    <main>
      <h3>Actualizar Datos</h3>
      <ImageGallery images={updateImages} />
    </main>
  );
}
