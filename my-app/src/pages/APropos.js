import React, { Fragment } from "react";
import AProposImgBanner from "../assets/AProposImgBanner.jpg";
import BannerContainer from "../components/BannerContainer";
import Footer from "../components/Footer";
import Btn from "../components/Button";

function APropos() {
  const text1 = "fiabilité";

  return (
    <Fragment>
      <BannerContainer image={AProposImgBanner} />
      <Btn text={text1} />
      <Footer />
    </Fragment>
  );
}

export default APropos;
