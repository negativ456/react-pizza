import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";
import styles from "./Search.module.scss";
import { setSearch } from "../../../redux/filter/slice";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [visSearchQuery, setVisSearchQuery] = useState("");
  const clearSearch = () => {
    dispatch(setSearch(""));
    setVisSearchQuery("");
    inputRef.current?.focus();
  };

  const delayedRequest = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 500),
    []
  );
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisSearchQuery(e.target.value);
    delayedRequest(e.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        value={visSearchQuery}
        onChange={onChangeSearch}
      />
      {visSearchQuery && (
        <svg
          onClick={clearSearch}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
