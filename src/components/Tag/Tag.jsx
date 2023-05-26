import "./Tag.scss";

function Tag({ tagName }) {
  return (
    <li
      className="tagList"
      key={tagName}
    >
      {tagName}
    </li>
  );
}

export default Tag;
