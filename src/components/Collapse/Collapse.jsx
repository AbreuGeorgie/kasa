import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.scss";

const Collapse = ({ title, textCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <h2 onClick={toggleCollapse}>
        {title}
        <span>
          {isCollapsed ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </h2>
      {isCollapsed ? (
        <div className="textCollapse">
          {typeof textCollapse === "object" ? (
            <ul>
              {textCollapse.map((text) => (
                <li key={`${text} - equipments`}>{text}</li>
              ))}
            </ul>
          ) : (
            <p>{textCollapse}</p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Collapse;
