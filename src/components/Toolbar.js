import React from "react";
import shortid from "shortid";

export default function Toolbar(props) {
  const { filters, selected } = props;
  const onSelectFilter = e => {
    props.onSelectFilter(e.target.innerText);
  };
  return (
    <div className="filter">
      {filters.map(o => {
        return (
          <div onClick={onSelectFilter} key={shortid.generate()} className={o === selected ? "active" : null}>
            {o}
          </div>
        );
      })}
    </div>
  );
}
