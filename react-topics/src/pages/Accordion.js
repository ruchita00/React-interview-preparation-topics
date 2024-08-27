import React, { useState } from "react";

const dummyData = [
  { id: "1", title: "title 1", content: " content for title 1" },
  { id: "2", title: "title 2", content: " content for title 2" },
  { id: "3", title: "title 3", content: " content for title 3" },
  { id: "4", title: "title 4", content: " content for title 4" },
];
const AccordionItem = ({ index, item, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;
  const handleToggle = () => {
    setActiveIndex(isActive === activeIndex ? null : index);
  };
  return (
    <div>
      <div onClick={handleToggle}>
        <h1>
          {item.title}
          <span>{isActive ? "-" : "+"}</span>
        </h1>
      </div>
      {isActive && <div>{item.content}</div>}
    </div>
  );
};
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {dummyData.map((item, index) => (
        <AccordionItem
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          key={index}
          index={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default Accordion;
