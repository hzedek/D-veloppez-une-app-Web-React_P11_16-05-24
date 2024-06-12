import "../styles/Button.scss";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Btn({ text, div }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);
  return (
    <div>
      <div className="btn" onClick={() => setIsOpen(!isOpen)}>
        <p className="btn_p text">{text}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      <p
        className="btn_animation"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        {isOpen && div}
      </p>
    </div>
  );
}

export default Btn;
