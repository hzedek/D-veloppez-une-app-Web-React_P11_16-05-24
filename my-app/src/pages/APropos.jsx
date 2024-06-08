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
      <Btn text={Fiabilité} div={<p className="btn_text">Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux Logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
      <Btn text={Respect} div={<p className="btn_text">Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux Logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
      <Btn text={Service} div={<p className="btn_text">Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux Logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
      <Btn text={Sécurité} div={<p className="btn_text">Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux Logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
    </div>
  );
}

export default APropos;
