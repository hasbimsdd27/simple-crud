import React from "react";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";
export default function Index(props) {
  return (
    <div className="flex flex-1 flex-row min-h-screen bg-gray-200">
      <div className="flex w-72">
        <SideMenu />
      </div>
      <div className="flex w-full flex-col max-h-full overflow-auto">
        <div>
          <TopBar />
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
}
