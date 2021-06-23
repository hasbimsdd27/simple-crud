import React, { useState } from "react";
import Header from "./Header";
import RenderList from "./RenderList";
import Modal from "./Modal";
import Swal from "sweetalert2";

export default function Index() {
  const [data, setData] = useState(() => []);
  const [show, setShow] = useState(() => false);
  const [detail, setDetail] = useState(() => []);

  const AddData = (data) => {
    setData((prev) => [...prev, data]);
  };

  const ToggleModal = () => {
    setShow((prev) => !prev);
  };

  const updateData = (e, index) => {
    let latestData = data;
    latestData.splice(index, 1, e);
    setData(() => latestData);
    setDetail(() => []);
  };

  const ShowDetailData = (data) => {
    setDetail(() => data);
    ToggleModal();
  };

  const deleteData = (code) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setData((prev) => prev.filter((item) => item.code !== code));
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }
    });
  };

  return (
    <div className="w-full">
      <Header ToggleModal={ToggleModal} />
      <RenderList
        data={data}
        setDetail={ShowDetailData}
        deleteData={deleteData}
      />

      <Modal
        show={show}
        AddData={AddData}
        ToggleModal={ToggleModal}
        detail={detail}
        updateData={updateData}
      />
    </div>
  );
}
