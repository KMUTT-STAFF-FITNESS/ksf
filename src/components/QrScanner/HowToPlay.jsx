import React, {  useState, useEffect, useCallback } from "react";
import Logo from "../core/Logo";
import BtnBack from "../core/BtnBack";
import { navigate } from "@reach/router";
import { apiFetchMachineHowToPlay } from "../../api/machine";
import Loading from "../core/Loading";


export default function HowToPlay() {
  const [howToPlay, setHowToPlay] = useState()
  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchMachineHowToPlay(1)
  
    setHowToPlay(data);
    setIsFetch(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Logo />
            </div>
            <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
              <video controls>
                <source src={"video_test/test.mp4"} type="video/mp4" />
              </video>
              <div class="text-center mx-auto my-4">
                {console.log(howToPlay)}
                <p className="text-gray-700 text-center text-lg ">
                  {howToPlay && howToPlay.detail}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4 text-center mx-auto my-3">
            <BtnBack
              className="buttonBack"
              onClick={() => navigate("/qrscanner")}
              text="Back"
            />
          </div>
        </div>
      </div>
  )
}
