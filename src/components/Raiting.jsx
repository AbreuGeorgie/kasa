import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const raitingStyle = {
  display: "flex",
  fontSize: "1.3rem",
  gap: "6px",
  color: "#e3e3e3",
};

const starOnStyle = {
  color: "red",
};

function Rating({ rating, id }) {
  const stars = [];
  const starsOff = [];
  for (let i = 0; i < rating; i++) {
    stars.push(i + 1);
  }

  if (stars.length < 5) {
    const starsMissing = 5 - stars.length;
    for (let i = 0; i < starsMissing; i++) {
      starsOff.push(i + 1);
    }
  }

  return (
    <div style={raitingStyle}>
      {stars.map((star, i) => (
        <FontAwesomeIcon
          key={`${id} Star On ${i + 1}`}
          icon={faStar}
          style={starOnStyle}
        />
      ))}
      {stars.length !== 5
        ? starsOff.map((starOff, i) => (
            <FontAwesomeIcon
              key={`${id} Star Off ${i + 1}`}
              icon={faStar}
            />
          ))
        : ""}
    </div>
  );
}

export default Rating;
