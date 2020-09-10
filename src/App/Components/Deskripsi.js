import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Deskripsi() {
  return (
    <section id="deskripsi">
      <Container>
        <Row className="justify-content-left">
          <Col>
            <h2 className="mt-4">Apa itu KIR ?</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={5}>
            <p>
              Kir adalah salah satu ekstrakurikuler di smp negeri 13 Bekasi yang
              bertemakan ekstrakurikuler yang menyediakan berbagai kegiatan unik
              dan beragam, tentunya anti mainstream.Ekstrakurikuler kir berbeda
              dengan ekstrakulikuler kebanyakan, di kir kalian dapat menemukan
              segala sesuatu hal yang baru.
            </p>
          </Col>
          <Col sm={5}>
            <p>
              Tidak ada senioritas di eksul kir ini, semua bebas berekspresi dan
              berpendapat . Kalian bisa belajar dan bertanya-tanya ke kakak
              kelas seputar hal sekolah ataupun luar sekolah. Selain itu jam
              ekstrakurikuler kir fleksibel, kalian bisa pulang ke rumah untuk
              berganti pakaian, jajan, makan, ataupun bermain game bersama.
              Ekskul nya pun tidak membosankan karena banyak suasana baru yang
              hadir menemani kalian.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Deskripsi;
