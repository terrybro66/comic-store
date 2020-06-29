import React, { useState } from "react";
import { useEffect } from "react";

const PaginationButton = ({ value, onClick, isActive, isDisabled }) => {
  return (
    <input
      type="button"
      value={value}
      disabled={isDisabled}
      onClick={onClick}
      style={{
        backgroundColor: isActive ? "red" : "",
      }}
    />
  );
};

const Pagination = ({ pageCount, onUpdate, currentPage }) => {
  const [pageNums, setPageNums] = useState([]);

  useEffect(() => {
    const nums = [];
    for (let i = 1; i <= pageCount; i++) {
      nums.push(i);
    }
    setPageNums(nums);
  }, [pageCount]);

  return (
    <div>
      <PaginationButton
        value="<"
        onClick={() => onUpdate(currentPage - 1)}
        isDisabled={currentPage < 2}
      />
      {pageNums.map((num, i) => (
        <PaginationButton
          value={num}
          onClick={() => onUpdate(num)}
          key={`PageLink-${num}`}
          isActive={currentPage === num}
        />
      ))}

      <PaginationButton
        value=">"
        onClick={() => onUpdate(currentPage + 1)}
        isDisabled={currentPage >= pageNums.length}
      />
    </div>
  );
};

export default Pagination;
