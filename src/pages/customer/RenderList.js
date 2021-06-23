import React from "react";
import Icon from "assets/icon/outline";

export default function RenderList(props) {
  const { data } = props;

  return (
    <div className="bg-white shadow-md rounded-md p-2">
      <div className="flex flex-1 flex-row justify-end mb-4">
        <button className="p-2 bg-yellow-500 text-white rounded-md focus:outline-none cursor-pointer">
          Download Template
        </button>
      </div>
      <div>
        <table className="table-fixed w-full">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="text-left p-2" style={{ width: "5%" }}>
                No
              </th>
              <th className="text-left p-2" style={{ width: "20%" }}>
                Code
              </th>
              <th className="text-left p-2" style={{ width: "20%" }}>
                Name
              </th>
              <th className="text-left p-2" style={{ width: "20%" }}>
                Email
              </th>
              <th className="text-center p-2" style={{ width: "20%" }}>
                Status
              </th>
              <th className="text-center p-2" style={{ width: "15%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td className="p-2 text-center" colSpan="6">
                  No Data :(
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{item.code}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.email}</td>
                  <td className="p-2 text-center">{item.status}</td>
                  <td className="flex flex-1 p-2 ">
                    <button
                      className="flex flex-1 items-center justify-center focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        props.setDetail({ ...item, index });
                      }}
                    >
                      <Icon.Edit2Outline className="h-6 w-6 fill-blue-500" />
                    </button>
                    <button
                      className="flex flex-1 items-center justify-center focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        props.deleteData(item.code);
                      }}
                    >
                      <Icon.Trash2Outline className="h-6 w-6 fill-red-500" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
