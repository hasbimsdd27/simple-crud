import React from "react";

export default function Header(props) {
  return (
    <div className="mb-6">
      <h4 className="text-xl">Customer</h4>
      <div className="flex flex-1 flex-row">
        <div className="flex flex-1">
          <button
            className="p-2 bg-blue-500 text-white rounded-md mr-2 focus:outline-none cursor-pointer"
            onClick={props.ToggleModal}
          >
            Add
          </button>
          <button className="p-2 bg-green-500 text-white rounded-md mr-4 focus:outline-none cursor-pointer">
            Upload
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          <input
            type="text"
            placeholder="Search Customer"
            className="p-2 focus:outline-none rounded-md border-2 border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
