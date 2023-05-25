import "./Thumb.scss";

function Thumb({ imgUrl, imgAltThumb, titleThumb }) {
  return (
    <article className="thumbContent">
      <img
        src={imgUrl}
        alt={imgAltThumb}
      />
      <h2>{titleThumb}</h2>
    </article>
  );
}

export default Thumb;
