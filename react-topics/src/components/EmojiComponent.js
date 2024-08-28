import React from "react";

const EmojiComponent = ({
  categories,
  groups,
  onGroupChange,
  onSearchChange,
  onCategoryChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search emojis"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">all categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={(e) => onGroupChange(e.target.value)}>
        <option value="">all groups</option>
        {groups.map((group) => (
          <option value={group} key={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmojiComponent;
