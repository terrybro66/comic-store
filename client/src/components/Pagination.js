import React, { useState, useEffect } from "react";

const Pagination = ({ comics, page }) => {

  const pageNumbers = [];
  const [btnStyle, setBtnStyle] = useState({ bgColor: "blue" });

  for (let i = 1; i <= Math.ceil(comics / 8); i++) {
    pageNumbers.push(i);
  }

  const changePage = (num) => {
    page(num);
  };

  const setPage = (event) => {
    let num = event.target.value;
    changePage(num)
  };

  return (
    <div>
      <input type="button" value="<" onClick={setPage} />
      {pageNumbers.map((number) => (
        <input type="button" value={number} onClick={setPage} key={number} />
      ))}
      <input type="button" value=">" onClick={setPage} />
    </div>
  );
};

export default Pagination;
