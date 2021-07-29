import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

interface Props {
  setQuery: (query: string) => void;
}

const Search: React.FC<Props> = ({ setQuery }) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setQuery(event.target.value);
          setSearchText(event.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(event) => {
          setQuery(searchText);
        }}
      >
        <HiSearch />
      </button>
    </div>
  );
};

Search.defaultProps = {};

export default React.memo(Search);
