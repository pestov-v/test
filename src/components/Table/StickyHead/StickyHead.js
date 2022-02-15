import React from "react";

const StickyHead = ({ titles = [] }) => {
  return (
    <thead className="sticky__head">
      <tr className="sticky__head_row">
        {titles.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default StickyHead;
