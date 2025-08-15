import React from "react";
interface InputProps {
  placeholder: string;
}

export const InputBox = ({ placeholder }: InputProps) => {
  const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    width: "300px",
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    color: "#333",
    transition: "border-color 0.3s ease-in-out",
  };

  return <input type="text" placeholder={placeholder} style={inputStyle} />;
};
