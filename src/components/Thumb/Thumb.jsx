import "./Thumb.scss";

function Thumb({ imgUrl, titleThumb }) {
  return (
    <article
      style={{ backgroundImage: `url(${imgUrl})` }}
      className="thumbContent"
    >
      <h2>{titleThumb}</h2>
    </article>
  );
}

export default Thumb;
