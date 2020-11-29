import { Container } from "react-bootstrap";
import Tabel from "./Tabel";
import "./covid.css";
import "./responsive.css";
import Card from "./Card";

function Covid() {
  return (
    <section className="covid">
      <Container fluid>
        <Card />
        <Tabel />
      </Container>
    </section>
  );
}

export default Covid;
