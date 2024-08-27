import React, { useState } from "react";

const dummyData = [
  { id: "1", title: "title 1", content: " content for title 1" },
  { id: "2", title: "title 2", content: " content for title 2" },
  { id: "3", title: "title 3", content: " content for title 3" },
  { id: "4", title: "title 4", content: " content for title 4" },
];
const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const onTitleClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div>
      <div>
        {dummyData.map((item) => {
          return (
            <button
              className={`${activeTab === item.id ? "" : "active"}`}
              onClick={() => onTitleClick(item.id)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {dummyData.map((item, index) =>
        item.id === activeTab ? <div>{item.content}</div> : null
      )}
    </div>
  );
};

export default Tab;
