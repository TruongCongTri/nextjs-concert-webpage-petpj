"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2480px] xl:px-20 md:px-10 sm:px-2 px-4 mx-auto">
      {children}
    </div>
  );
};

// client component can not be a wrapper of server component
// solve: pass server component inside a client component as a prop

export default Container;
