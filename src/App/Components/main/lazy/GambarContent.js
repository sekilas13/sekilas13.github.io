import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Row, Container } from "react-bootstrap";
import gambar from "../../../assets/data/Gambar";
import loadable from "@loadable/component";

const Wrapper = loadable(() => import("./WrapperImg"));

const GambarMap = () => (
  <SimpleReactLightbox>
    <SRLWrapper>
      <Container className="pt-4">
        <Row>
          {gambar.map((g, i) => (
            <Wrapper key={i} image={g} />
          ))}
        </Row>
      </Container>
    </SRLWrapper>
  </SimpleReactLightbox>
);

export default GambarMap;
