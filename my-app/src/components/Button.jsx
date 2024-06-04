import "../styles/Button.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Btn({ text, div }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="btn" onClick={() => setIsOpen(!isOpen)}>
        <p className="btn_p text">{text}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && div}
    </div>
  );
}

export default Btn;
