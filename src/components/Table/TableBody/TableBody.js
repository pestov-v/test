import React from "react";

const TableBody = ({ data }) => {
  return (
    <tbody className="table__body">
      {data.map(
        ({
          Cur_ID,
          Date,
          Cur_Abbreviation,
          Cur_Scale,
          Cur_Name,
          Cur_OfficialRate,
        }) => (
          <tr key={Cur_ID}>
            <td>{Cur_ID}</td>
            <td>{Date}</td>
            <td>{Cur_Abbreviation}</td>
            <td>{Cur_Scale}</td>
            <td>{Cur_Name}</td>
            <td>{Cur_OfficialRate}</td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
