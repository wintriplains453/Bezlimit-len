import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({questionsAnswers}) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {true ?
        <>
          {questionsAnswers.map((item, index) => (
              <AccordionItem
                key={item.id}
                onToggle={() => handleToggle(item.id)}
                active={clicked === item.id}
                faq={item}
              /> 
          ))}       
        </> : null      
      }

    </ul>
  );
};

export default Accordion;