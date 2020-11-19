import React, { useState, useEffect, useCallback } from "react";
import Logo from "../core/Logo";
import BtnBack from "../core/BtnBack";
import { navigate } from "@reach/router";
import { apiFetchMachineHowToPlay } from "../../api/machine";
import Loading from "../core/Loading";
import _ from "lodash";

export default function HowToPlay({ id }) {
  const [howToPlay, setHowToPlay] = useState();
  const [url, setUrl] = useState();
  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsFetch(true);
      const { data } = await apiFetchMachineHowToPlay(id);
      setUrl(data.video_path)
      const dataParse = data.detail.split("<br />");
      setHowToPlay(dataParse);
      setIsFetch(false);
    } catch (error) {
      console.log("Error: " + error);
      setIsFetch(false);
    } finally {
      setIsFetch(false);
    }
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
    <div className="max-w-screen-xl mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
          <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
            <div class="mx-auto my-4">
              {_.map(howToPlay, (data, i) => (
                <div key={i.toString()}>
                  <iframe
                    src={url}
                    width="560"
                    height="315"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>

                  <div
                    className="text-gray-700 text-lg "
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                </div>
              ))}
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
  );
}
