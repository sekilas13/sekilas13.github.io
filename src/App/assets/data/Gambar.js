import img1 from "../Img/normal/1.jpg";
import img2 from "../Img/normal/2.jpg";
import img3 from "../Img/normal/3.jpg";
import img4 from "../Img/normal/4.jpg";
import img5 from "../Img/normal/5.jpg";
import img6 from "../Img/normal/6.jpg";

import webp1 from "../Img/webp/1.webp";
import webp2 from "../Img/webp/2.webp";
import webp3 from "../Img/webp/3.webp";
import webp4 from "../Img/webp/4.webp";
import webp5 from "../Img/webp/5.webp";
import webp6 from "../Img/webp/6.webp";

import isSupport from "../../utils/isSupportWebp";

const ListGambar = [
  {
    src: isSupport ? webp1 : img1,
    alt: "Demonstrasi roket air pada saat pengenalan eskul",
  },
  {
    src: isSupport ? webp2 : img2,
    alt:
      "Eksperimen odol gajah yang reaksinya mengeluarkan odol yang ada di botol",
  },
  {
    src: isSupport ? webp3 : img3,
    alt: "Anak kelas 7 ikut serta mencoba eksperimen odol gajah",
  },
  {
    src: isSupport ? webp4 : img4,
    alt: "Anggota KIR yang melakukan eksperimen 'Nafas api'",
  },
  {
    src: isSupport ? webp5 : img5,
    alt:
      "Anggota eksperimen meniup selang yg berisi tepung maizena untuk menghasilkan nafas api",
  },
  {
    src: isSupport ? webp6 : img6,
    alt: "Anggota eksperimen sedang menyiapkan bahan dan alat",
  },
];

export default ListGambar;
