import { Suspense } from "react";
import { observer } from "mobx-react";
import CardWrapper from "./custom/CardWrapper";
import { lazy } from "@loadable/component";
import {
  faVirus,
  faHospital,
  faHandHoldingMedical,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";

const Lazy = lazy(() => import("./lazy/LazyCard"));

const Fallback = () => (
  <div className="row mt-4 justify-content-center">
    <div className="col col-lg-3 col-sm-5">
      <CardWrapper label="Positif" data="===,===" icon={faVirus} />
    </div>
    <div className="col col-lg-3 col-sm-5">
      <CardWrapper label="Dirawat" data="===,===" icon={faHospital} />
    </div>
    <div className="col col-lg-3 col-sm-5">
      <CardWrapper label="Sembuh" data="===,===" icon={faHandHoldingMedical} />
    </div>
    <div className="col col-lg-3 col-sm-5">
      <CardWrapper label="Meninggal" data="==,===" icon={faSkullCrossbones} />
    </div>
  </div>
);

function Card() {
  return (
    <section id="all">
      <Suspense fallback={Fallback()}>
        <Lazy />
      </Suspense>
    </section>
  );
}

export default observer(Card);
