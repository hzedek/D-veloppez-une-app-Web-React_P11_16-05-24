import "../styles/BannerContainer.scss";

function Display({image}) {
  return (
    <div className="Div_ImgContainer">
      <img src={image} alt="bannière" />
    </div>
  );
}

export default Display;