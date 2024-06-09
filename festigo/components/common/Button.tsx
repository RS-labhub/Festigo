import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  css: string;
  clickHandler: () => void;
};

export function Button({ children, css, clickHandler }: ButtonProps) {
  return (
    <button className={css} onClick={clickHandler}>
      {children}
    </button>
  );
}
