import React ,{ useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="accordion_button" onClick={onToggle}>
        {question}
        <span className="accordion_control">{active ? "-" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;