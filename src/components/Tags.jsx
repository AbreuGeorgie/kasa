import "./Tags.scss";

function Tags(props) {
  const tags = props.tags;
  const listTags = tags.map((tag, id) => <li className="tagList" key={`${id} - ${tag}`}>{tag}</li>);
  return <ul className="tagContainer">{listTags}</ul>;
}

export default Tags;
