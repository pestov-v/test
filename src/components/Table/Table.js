import React, { useEffect, useState } from "react";
import "./Table.css";
import TableBody from "./TableBody/TableBody";
import api from "../../api";
import TableHead from "./TableHead/TableHead";
import StickyHead from "./StickyHead/StickyHead";

const Table = ({ url, tableRef, sticky }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api(url);
      setData(data);
    };
    fetchData();
  }, []);

  if (!data.length) return <></>;

  return (
    <table className="table" ref={tableRef}>
      {sticky && <StickyHead titles={Object.keys(data[0])} />}
      <TableHead titles={Object.keys(data[0])} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
