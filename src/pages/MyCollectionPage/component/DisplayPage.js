import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import FaceIcon from "../../../Images/facebook_icon.png";
import IgIcon from "../../../Images/instagram_icon.png";
import LineIcon from "../../../Images/line_icon.png";
import SearchBar from "../../../components/SearchBar/SearchBar";


export default function DisplayPage(prop) {
  return (
    <div className="flex flex-row ">
      <div className="fixed object-left top-0 z-10">
        <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-52">
        <div className="mt-1 mr-80 w-1/4">
          <SearchBar />
        </div>
        <div className="flex items-center font-bold">
          {prop.location.state.data.userName}
        </div>
      </div>
      <div className="flex flex-col ml-80 w-full h-screen mt-24">
        <div className="flex flex-col bg-gray-300 w-7/12 h-3/4 rounded-lg">
          <div className="flex flex-row ml-8 mt-8">
            <div className="w-2/6">
              <img
                src={prop.location.state.data.picture}
                className="w-80 h-80 rounded-xl"
                alt="IMG"
              />
            </div>
            <div className="flex flex-col  ml-16">
              <div className="text-xl font-bold">
                {prop.location.state.data.bookTitle}
              </div>
              <div className="text-base font-bold text-gray-400 mt-5">
                book owner : {prop.location.state.data.userName}
              </div>
              <div className="text-xl font-bold mt-5">CONTRACT</div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={FaceIcon} className="w-10 rounded-lg" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={IgIcon} className="w-10" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
              <div className="flex flex-row text-base font-bold text-gray-400 mt-5">
                <img src={LineIcon} className="w-10 rounded-lg" alt="IMG" />
                <div className="flex flex-row items-center">
                  <div className="ml-3">:</div>
                  <div className="ml-3 mt">
                    {prop.location.state.data.userName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}