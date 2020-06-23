import React, { useState } from "react";

const Pagination = ({ comics, page, nextPage }) => {
  const pageNumbers = [];
  let currPage = 1;

  for (let i = 1; i <= Math.ceil(comics / 4); i++) {
    pageNumbers.push(i);
  }

  if (nextPage) {
    nextPage = parseInt(nextPage.split("=")[1]);
    currPage = nextPage - 1;
  } else {
    currPage = pageNumbers.slice(-1).pop();
  }

  const stepPage = (val) => {
    if (val === ">" && nextPage) {
      page(nextPage);
    }

    if (val === "<" && currPage > 1) {
      nextPage = currPage - 1;
      page(nextPage);
    }
  };

  const setPage = (event) => {
    let val = event.target.value;
    Number.isInteger(parseInt(val)) ? page(val) : stepPage(val);
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
