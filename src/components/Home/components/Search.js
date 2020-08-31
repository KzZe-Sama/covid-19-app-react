import React, { useEffect } from "react";
import "./style.css";
import SearchInput from "./SearchInput";
export default function Search(props) {
  useEffect(() => {}, [props.data]);
  return (
    <form onSubmit={props.getCountry}>
      <SearchInput name="country" data={props.data} />
    </form>
  );
}
