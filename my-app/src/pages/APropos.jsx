import AProposImgBanner from "../assets/AProposImgBanner.jpg";
import Display from "../components/BannerContainer";
import Btn from "../components/Button";

function APropos() {
  const Fiabilité = "Fiabilité";
  const Respect = "Respect";
  const Service = "Service";
  const Sécurité = "Sécurité";

  return (
    <div className="div_Apropos_container">
      <Display image={AProposImgBanner} />
      <Btn text={Fiabilité} />
      <Btn text={Respect} />
      <Btn text={Service} />
      <Btn text={Sécurité} />
    </div>
  );
}

export default APropos;
