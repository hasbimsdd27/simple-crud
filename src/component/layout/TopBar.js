import React from "react";
import Flag from "assets/icon/flag";

export default function Header() {
  return (
    <div className="flex flex-1 justify-end p-4">
      <div className="flex mr-6">
        <Flag.UK className="h-6 w-10 rounded-lg" />
      </div>
      <div className="flex">
        <div className="rounded-full bg-red-600 h-6 w-6 text-center text-white mr-2">
          A
        </div>
        <div>Agus</div>
      </div>
    </div>
  );
}
