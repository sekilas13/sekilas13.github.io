import { Row, Col, Image } from "react-bootstrap";
import gambar from "../../../assets/data/Gambar";

const GambarMap = () => (
  <Row>
    {gambar.map((g, i) => (
      <Col md={4} key={i}>
        <Image src={g.src} alt={g.alt} className="img-thumbnail mt-3" />
      </Col>
    ))}
  </Row>
);

export default GambarMap;
