import React from "react";

const Field = ({ field, onChange }) => {
  const { label, ...attributes } = field;

  return (
    <>
      <label>{label}</label>
      <input onChange={onChange} {...attributes} />
    </>
  );
};
export default Field;
