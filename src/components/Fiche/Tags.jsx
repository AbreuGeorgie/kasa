const li = {
  listStyle: "none",
  padding: "5px 20px",
  borderRadius: "10px",
  fontSize: "0.9rem",
  fontWeight: "500",
  backgroundColor: "red",
  color: "white",
};
const tagContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
  padding: "0",
  margin: "25px 0",
};

function Tags(props) {
  const tags = props.tags;
  const listTags = tags.map((tag, id) => (
    <li
      style={li}
      key={`${id} - ${tag}`}
    >
      {tag}
    </li>
  ));
  return <ul style={tagContainerStyle}>{listTags}</ul>;
}

export default Tags;
