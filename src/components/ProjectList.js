import React from "react";
import shortid from "shortid";

export default function ProjectList(props) {
  const { projects } = props;
  const projectColumn = [];
  const columns = 3;
  const lengthArr = Math.round(projects.length / columns);
  for (let i = 0; i < columns; i += 1) {
    projectColumn.push(projects.slice(lengthArr * i, lengthArr * (i + 1)));
  }

  return (
    <div className="project-list" key={shortid.generate()}>
      {projectColumn.map(o => (
        <div className="column" key={shortid.generate()}>
          {o.map(b => (
            <img src={b.img} key={shortid.generate()}/>
          ))}
        </div>
      ))}
    </div>
  );
}
