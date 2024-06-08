import "../styles/BannerContainer.scss";

function Display({image,titre}) {
  return (
    <div className="Div_ImgContainer">
      <img src={image} alt="bannière" />
      <p className="p_Banner_titre" id="p">{titre}</p>
    </div>
  );
}

export default Display;