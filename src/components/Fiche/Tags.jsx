
const li = {
      listStyle: "none",
      padding: "5px 20px",
      borderRadius: "10px",
      fontSize: "0.9rem",
      fontWeight: "500",
      backgroundColor: "red",
      color: "white"
    }
  


function Tags({ tags }) {
    return <li style={li} key={tags}>{tags}</li>;
  }

export default Tags