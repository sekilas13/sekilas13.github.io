import LazyLoad from "react-lazyload";
import loadable from "@loadable/component";

const Content = loadable(() => import("./lazy/DeskripsiContent"), {
  fallback: (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col mt-3">
          <h2 className="text-center">Apa itu KIR ?</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-3 text-center">
        <div className="col col-sm-5">
          <p>
            Kir adalah salah satu ekstrakurikuler di{" "}
            <a href="https://smpn13kotabekasi.sch.id/">SMP Negeri 13 Bekasi</a>{" "}
            yang bertemakan ekstrakurikuler yang menyediakan berbagai kegiatan
            unik dan beragam, tentunya kegiatannya juga anti mainstream.
          </p>
        </div>
        <div className="col col-sm-5">
          <p>
            Tidak ada senioritas di eksul kir ini, semua bebas berekspresi dan
            berpendapat. Kalian bisa belajar dan bertanya-tanya ke kakak kelas
            seputar hal sekolah ataupun luar sekolah.
          </p>
        </div>
      </div>
    </div>
  ),
});

function Deskripsi() {
  return (
    <section id="deskripsi">
      <LazyLoad once>
        <Content />
      </LazyLoad>
    </section>
  );
}

export default Deskripsi;
