import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Paragraphs from "./components/Paragraphs/Paragraphs";

function App() {
  const tableRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const listener = ({ target }) => {
      if (target.scrollTop - 50 > tableRef.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    document.body.addEventListener("scroll", listener);

    return () => {
      document.body.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        <Paragraphs />
        <Table
          url="https://www.nbrb.by/api/exrates/rates?periodicity=0"
          tableRef={tableRef}
          sticky={sticky}
        />
      </div>
    </div>
  );
}

export default App;
