import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import pictureLayout from "../HomePage/component/layout.png";
import PictureBook1 from "../HomePage/component/images.jpg";
import PictureBook2 from "../HomePage/component/images2.jpg";
import PictureBook3 from "../HomePage/component/images3.jpg";
import PictureBook4 from "../HomePage/component/images4.jpg";
import PictureBook5 from "../HomePage/component/images5.jpg";
import PictureBook6 from "../HomePage/component/images6.jpg";
import PictureBook7 from "../HomePage/component/images7.jpg";
import PictureBook8 from "../HomePage/component/images8.jpg";

export default function MyCollectionPage() {
  const Data = [
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 1",
      picture: PictureBook1,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 2",
      picture: PictureBook2,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 3",
      picture: PictureBook3,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 4",
      picture: PictureBook4,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 5",
      picture: PictureBook5,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 6",
      picture: PictureBook6,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 7",
      picture: PictureBook7,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
    {
      bookTitle: "KIMETSU NO YAIBA VOLUME 8",
      picture: PictureBook8,
      userName: "Nattawut Krongareetham",
      MobileNumber: "0640630406",
      Email: "tomkabtokom@gmail.com",
    },
  ];
  return (
    <div className="flex flex-row ">
      <div className="fixed object-left top-0 z-10">
      <Navbar />
      </div>
      <div className="fixed flex flex-row justify-center bg-yellow-400 w-full top-0 h-16 focus:outline-white ml-52">
        <div className="mt-1 mr-80 w-1/4">
          <SearchBar />
        </div>
        <div className="hover:bg-gray-500 items-center justify-center flex mt-2 h-12 w-12 rounded-lg ml-10 ">
          <button>
            <img
              src={pictureLayout}
              className="w-8 focus:outline-none"
              alt="IMG"
            />
          </button>
        </div>
      </div>
      <div className=" ml-60 w-3/4 space-y-4 mt-16">
        {Data.map((item) => {
          return (
            <div className="inline-flex flex-col ml-2">
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
