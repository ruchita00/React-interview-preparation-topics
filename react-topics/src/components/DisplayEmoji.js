import React from "react";

const DisplayEmoji = ({ emojis }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {emojis.map((emoji, index) => (
        <div key={index}>
          <span dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}></span>
        </div>
      ))}
    </div>
  );
};

export default DisplayEmoji;
