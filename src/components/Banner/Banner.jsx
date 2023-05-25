import "./Banner.scss";

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
