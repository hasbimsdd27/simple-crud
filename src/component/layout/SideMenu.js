import React from "react";
import IconOutline from "assets/icon/outline";

export default function SideMenu() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: <IconOutline.PieChartOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Member Journey",
      icon: <IconOutline.ActivityOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Last Location",
      icon: <IconOutline.NavigationOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Customer",
      icon: <IconOutline.BriefcaseOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Task",
      icon: <IconOutline.EditOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Configuration",
      icon: <IconOutline.OptionsOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Report",
      icon: <IconOutline.ClipboardOutline className="w-6 h-6 fill-blue-500" />,
    },
    {
      name: "Sign Out",
      icon: <IconOutline.LogOutOutline className="w-6 h-6 fill-blue-500" />,
    },
  ];

  return (
    <div className="py-4 w-full shadow-xl rounded-tr-lg rounded-br-lg bg-white">
      <div>
        <div className="font-bold text-blue-500 text-xl text-center">
          JARI VISIBILITY
        </div>

        <div className="m-4 border-2 p-2 border-gray-300 rounded-sm text-gray-500">
          Team Jarvis Development
        </div>
      </div>
      <div>
        {MenuList.map((item, index) => (
          <div
            className="flex flex-1 flex-row items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
            key={index}
          >
            <div className="flex mr-2">{item.icon}</div>
            <div className="flex flex-1 text-gray-700">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
