import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "success";
}

const Button = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
