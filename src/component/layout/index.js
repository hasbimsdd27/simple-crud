import React from "react";

export default function Index(props) {
  return (
    <div className="flex flex-1 flex-row min-h-screen">
      <div className="flex w-56 shadow-xl">Side Menu</div>
      <div className="flex w-full bg-gray-200">{props.children}</div>
    </div>
  );
}
