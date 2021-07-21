import React from "react";

export default function DisplayCollection2(prop) {
  return (
    <div className="inline-flex flex-col ml-2">
      <div className="mx-auto bg-white rounded-md shadow-lg overflow-hidden md:max-w-xl">
        <div className="md:flex ">
          <div className="w-32 h-40">
              <img className="h-full w-full" src={prop.Picture} alt="IMG" />
          </div>
          <div className="p-3">
            <div className="uppercase tracking-wide text-lg text-indigo-500 font-mono">
              {prop.BookTitle}
            </div>
            <div className="flex flex-row">
              <div className=" text-blue-500 font-mono">Owner : </div>
              <div className="font-mono lowercase">{prop.User}</div>
            </div>
            <div className="mt-2">
              <div className="text-blue-500 font-mono">Contact</div>
              <div className="flex flex-row">
                <div className=" text-blue-500 font-mono">Phone : </div>
                <div className="font-mobo">{prop.MobileNumber}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
