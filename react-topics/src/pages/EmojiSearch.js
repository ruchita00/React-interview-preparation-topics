import React, { useEffect, useState } from "react";
import EmojiComponent from "../components/EmojiComponent";
import DisplayEmoji from "../components/DisplayEmoji";

const EmojiSearch = () => {
  const [emojis, setEmojis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    const fetchEmpjis = async () => {
      try {
        const response = await fetch("https://emojihub.yurace.pro/api/all");
        const data = await response.json();
        setEmojis(data);
        setFilteredEmojis(data);
        const uniqueCategories = [
          ...new Set(data.map((emoji) => emoji.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.log("error fetching emojies", error);
      }
    };
    fetchEmpjis();
  }, []);

  const filteredEmoji = () => {
    let filtered = emojis;
    if (selectedCategory) {
      filtered = filtered.filter(
        (emoji) => emoji.category === selectedCategory
      );
      const uniqueGroups = [...new Set(filtered.map((emoji) => emoji.group))];
      setGroups(uniqueGroups);
    } else {
      setGroups([]);
    }
    if (selectedGroup) {
      filtered = filtered.filter((emoji) => emoji.group === selectedGroup);
    }
    if (searchTerm) {
      filtered = filtered.filter((emoji) =>
        emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredEmojis(filtered);
  };
  useEffect(() => {
    filteredEmoji();
  }, [selectedCategory, selectedGroup, searchTerm]);
  return (
    <div>
      <h2>Emoji hub</h2>
      <EmojiComponent
        categories={categories}
        groups={groups}
        onGroupChange={setSelectedGroup}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />
      <DisplayEmoji emojis={filteredEmojis} />
    </div>
  );
};

export default EmojiSearch;
