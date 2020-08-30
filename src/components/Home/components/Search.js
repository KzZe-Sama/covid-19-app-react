import React, { useEffect } from "react";
import "./style.css";
import SearchInput from "./SearchInput";
export default function Search(props) {
  useEffect(() => {}, [props.data]);
  return (
    // <div className="search-bar">
    <form onSubmit={props.getCountry}>
      {/* <input
          placeholder={props.placeholder && props.placeholder}
          name={props.name}
          required
          onInput={() => isTyping(!typing)}
        /> */}
      <SearchInput name="country" data={props.data} />
      {/* <button>
          <Icon name="search" size="large" color="black" />
        </button> */}
    </form>
    // </div>
  );
}
