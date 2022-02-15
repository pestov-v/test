import React from "react";

const TableHead = ({ titles = [] }) => {
  return (
    <thead className="table__head">
      <tr className="head__row">
        {titles.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
