import { Suspense, lazy, memo } from "react";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import Loading from "../../Custom/Loading";

const GambarMap = lazy(() => import("./lazy/GambarMap"));

function Gambar() {
  return (
    <section id="gambar">
      <Suspense fallback={<Loading />}>
        <SRLWrapper>
          <Container className="pt-4">
            <GambarMap />
          </Container>
        </SRLWrapper>
      </Suspense>
    </section>
  );
}

export default memo(Gambar);
