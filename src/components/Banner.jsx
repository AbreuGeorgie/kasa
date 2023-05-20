import "./Banner.scss";

/* media queries pour format mobile  
centrer le texte réellement sur l'image */

function Banner({ imgUrl, imgAlt, isTextShow }) {
  return (
    <div className="banner">
      <img
        className="imageBanner"
        src={imgUrl}
        alt={imgAlt}
      />
      {isTextShow ? (
        <p className="textBanner">Chez vous, partout et ailleurs</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Banner;
