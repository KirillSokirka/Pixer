import React, { useState } from "react";
import { SearchArea, SearchInput, SSearch } from "./styles";
import { useThemeContext } from "../../contexts/hooks";

const SearchComponent = ({ defaultOpen = false }) => {
  const { theme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchArea isOpen={isOpen || defaultOpen}>
      <SSearch onClick={handleClick} fill={theme.svgFill} />
      {isOpen && (
        <SearchInput
          type="text"
          placeholder="Search by item, people, hashtag..."
        />
      )}
    </SearchArea>
  );
};

const ExpandedSearchComponent = () => {
  return <SearchComponent defaultOpen={true} />;
};

export { SearchComponent, ExpandedSearchComponent };
