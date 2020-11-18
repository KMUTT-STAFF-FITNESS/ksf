import React, { useEffect, useCallback, useState } from "react";
import { apiCreateNotificationById } from "../../api/notification";
import { navigate } from "@reach/router";
import BtnBack from "../core/BtnBack";
import Logo from "../core/Logo";
import Loading from "../core/Loading";


export default function NotificationDetail(props) {

  const [isFetch, setIsFetch] = useState(false);
  const [news, setNews] = useState();

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiCreateNotificationById(props.id);
    setNews(data);
    console.log(data)
    setIsFetch(false);
  }, [props.id]);

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
            <Logo/>
          </div>
          <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
            <div class="px-6 py-4">
              <div class="text-gray-700 text-lg font-bold">
                {news && news.message_title}
              </div>
              <p class="text-gray-700 mx-4 my-4 text-base">
                {news && news.content}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {news && news.author}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-4 text-center mx-auto my-3">
          <BtnBack
            className="buttonBack"
            onClick={() => navigate("/notification")}
            text="Back"
          />
        </div>
      </div>
    </div>
  );
}
