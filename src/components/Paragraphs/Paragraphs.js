import React from "react";

const Paragraphs = () => {
  return (
    <div>
      {Array(5)
        .fill(null)
        .map((i, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            ducimus est praesentium recusandae reiciendis sit? Debitis enim fuga
            iusto voluptates?
          </p>
        ))}
    </div>
  );
};

export default Paragraphs;
