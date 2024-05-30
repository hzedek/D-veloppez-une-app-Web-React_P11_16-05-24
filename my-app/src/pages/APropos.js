import React, { Fragment } from "react";
import AProposImgBanner from "../assets/AProposImgBanner.jpg";
import BannerContainer from "../components/BannerContainer";
import Btn from "../components/Button";

function APropos() {
  const fiabilité = "fiabilité";
  const Respect = "Respect";
  const Service = "Service";
  const Sécurité = "Sécurité";

  return (
    <Fragment>
      <BannerContainer image={AProposImgBanner} />
      <Btn text={fiabilité} />
      <Btn text={Respect} />
      <Btn text={Service} />
      <Btn text={Sécurité} />
    </Fragment>
  );
}

export default APropos;
