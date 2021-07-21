import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DisplayCollection from "../../components/DisplayCollection1/DisplayCollection1";
import DisplayCollection2 from "../../components/DisplayCollection2/DisplayCollection2";
import DisplayCollection3 from "../../components/DisplayCollection3/DisplayCollection3";
import Data from "../../components/Data.json";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";
import WeeklyRankingBar from "../../components/WeeklyRankingBar/WeeklyRankingBar";

export default function MyCollectionPage() {
  const [state, setState] = useState(3);

  const callBackToggleState = () => {
    if (state === 1) {
      setState(2);
    } else if (state === 2) {
      setState(3);
    } else {
      setState(1);
    }
  };
  return (
    <div className="h-screen dark:bg-black">
      <div className="fixed object-left top-0 z-20">
        <Navbar />
      </div>
      <TopBarMenu CallBackToggleState={callBackToggleState} />
      {state === 1 && (
        <div className="object-center ml-72 space-y-2 mt-20 ">
          {Data.map((item) => {
            return (
              <DisplayCollection
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}
      :
      {state === 2 && (
        <div className="object-center ml-80 space-y-2 mt-10">
          {Data.map((item) => {
            return (
              <DisplayCollection2
                Picture={item.picture}
                BookTitle={item.bookTitle}
                User={item.userName}
                MobileNumber={item.MobileNumber}
                Email={item.Email}
              />
            );
          })}
        </div>
      )}{" "}
      :{" "}
      {state === 3 && (
        <div className="ml-72 w-8/12 space-y-2 mt-10">
          {Data.map((item) => {
            return (
              <div className="inline-flex flex-col ml-2">
                <DisplayCollection3 data={item} />
              </div>
            );
          })}
        </div>
      )}
      <WeeklyRankingBar />
    </div>
  );
}
