import React, { useState } from "react";
import { SearchArea, SearchInput, SSearch } from "./styles";

const SearchComponent = ({ defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchArea isOpen={isOpen || defaultOpen}>
      <SSearch onClick={handleClick} />
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
