import React from "react";

const Field = ({ type, label, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
export default Field;
