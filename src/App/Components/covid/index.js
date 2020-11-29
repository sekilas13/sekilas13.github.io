import { Container } from "react-bootstrap";
import Tabel from "./Tabel";
import "./covid.css";
import "./responsive.css";
import Card from "./Card";

function Covid() {
  // const store = useContext(Context);

  // const set = useCallback((data, index) => store.setData(data, index), [store]);

  // useEffect(() => {
  // axios
  //   .get("https://indonesia-covid-19.mathdro.id/api/provinsi/")
  //   .then((data) => data.data.data)
  //   .then((result) => set(result, "Provinsi"));
  // }, [set]);

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
