import React, { useEffect, useRef, useState } from "react";

export default function Modal(props) {
  const initData = {
    name: "",
    code: "",
    address: "",
    image: "",
    email: "",
    phone: "",
  };

  const initStatus = {
    name: "-",
    code: "-",
    address: "-",
    image: "-",
    email: "-",
    phone: "-",
  };

  const [data, setData] = useState(() => ({
    name: "",
    code: "",
    address: "",
    image: "",
    email: "",
    phone: "",
  }));

  const [status, setStatus] = useState(() => ({
    name: "-",
    code: "-",
    address: "-",
    image: "-",
    email: "-",
    phone: "-",
  }));

  const HandleChange = (e) => {
    if (e.target.name === "email") {
      if (
        e.target.value.indexOf("@") === -1 ||
        e.target.value.indexOf(".") === -1
      ) {
        setStatus((prev) => ({ ...prev, email: false }));
      } else {
        setStatus((prev) => ({ ...prev, email: true }));
      }
    } else if (e.target.name === "phone") {
      if (e.target.value.length < 9) {
        setStatus((prev) => ({ ...prev, phone: false }));
      } else {
        setStatus((prev) => ({ ...prev, phone: true }));
      }
    } else {
      if (e.target.value.length < 6) {
        setStatus((prev) => ({ ...prev, [e.target.name]: false }));
      } else {
        setStatus((prev) => ({ ...prev, [e.target.name]: true }));
      }
    }
    if (e.target.name === "image") {
      setData((prev) => ({
        ...prev,
        image: e.target.files,
      }));
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const imageRef = useRef(null);

  const HandleSubmit = () => {
    const Valid = Object.keys(status)
      .map((item) => status[item])
      .filter((item) => !!item && item !== "-");

    if (Valid.length === 6) {
      if (!!props?.detail?.name) {
        props.updateData(data, props.detail.index);
      } else {
        props.AddData({ ...data, status: "Active" });
      }

      setData(() => initData);
      setStatus(() => initStatus);
      props.ToggleModal();
    } else {
      let Valid = {};
      Object.keys(data).forEach((item) => {
        if (data[item] === "") {
          Valid[item] = false;
        } else {
          Valid[item] = true;
        }
      });
      setStatus(() => Valid);
    }
  };

  useEffect(() => {
    setData(() => props.detail);
    setStatus(() => ({
      name: true,
      code: true,
      address: true,
      image: true,
      email: true,
      phone: true,
    }));
  }, [props.detail]);
  if (!props.show) {
    return <></>;
  }
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 flex flex-1 items-start justify-center overflow-auto">
      <div className="bg-white rounded-md p-4 text-black min-w-1/3 mt-8 mb-8">
        <div className="flex flex-row flex-1 mb-4">
          <div className="flex flex-1 text-xl">
            {!!props?.detail ? "Edit" : "Tambah"} Data
          </div>
          <div
            className="flex flex-1 text-xl cursor-pointer justify-end"
            onClick={props.ToggleModal}
          >
            &#10005;
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSubmit();
          }}
          className="flex flex-col"
        >
          <div className="mb-3 flex flex-col">
            <label>Code</label>
            <input
              name="code"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md"
              placeholder="1267531672537612538712"
              type="text"
              onChange={HandleChange}
              value={data.code}
            />
            {!status.code && (
              <small className="text-red-500">Please Insert Valid Code</small>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label>Name</label>
            <input
              name="name"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md"
              placeholder="John Doe"
              type="text"
              onChange={HandleChange}
              value={data.name}
            />
            {!status.name && (
              <small className="text-red-500">Please Insert Valid Name</small>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label>Address</label>
            <textarea
              name="address"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md"
              placeholder="Jl. 123"
              onChange={HandleChange}
              value={data.address}
            />
            {!status.address && (
              <small className="text-red-500">
                Please Insert Valid Address
              </small>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label>Email</label>
            <input
              name="email"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md"
              placeholder="johndoe@gmail.com"
              type="email"
              onChange={HandleChange}
              value={data.email}
            />
            {!status.email && (
              <small className="text-red-500">Please Insert Valid Email</small>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label>Phone</label>
            <input
              name="phone"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md"
              placeholder="081122334455"
              type="text"
              onChange={HandleChange}
              value={data.phone}
            />
            {!status.phone && (
              <small className="text-red-500">Please Insert Valid Phone</small>
            )}
          </div>
          <div className="mb-3 flex flex-col">
            <label>Image</label>

            {data?.image?.length > 0 ? (
              <img
                src={URL.createObjectURL(data.image[0])}
                alt="profile"
                className="h-36 w-36"
              />
            ) : (
              <div
                className="h-36 w-36 border-2 border-gray-300 flex justify-center items-center text-lg rounded-md border-dashed cursor-pointer"
                onClick={() => {
                  imageRef.current.click();
                }}
              >
                +
              </div>
            )}

            <input
              name="image"
              className="focus:border-gray-500 focus:outline-none border-2 border-gray-300 p-2 rounded-md hidden"
              type="file"
              ref={imageRef}
              onChange={HandleChange}
            />
            {!status.image && (
              <small className="text-red-500">Image Can't Be Empty</small>
            )}
          </div>
          <button
            className="bg-blue-500 text-white w-full p-2 rounded-md cursor-pointer focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
