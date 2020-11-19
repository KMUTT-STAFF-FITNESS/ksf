import React, { useCallback, useEffect } from "react";
import Loading from "../components/core/Loading";
import Qs from "qs";
import { apiFecthLogin } from "../api/login";

export default function HomeCheck(props) {
  const fetchData = useCallback(async () => {
    // const code = props.location.search.split("code=")
    const codeState = Qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    }).code;
    const state = Qs.parse(props.location.search, { ignoreQueryPrefix: true })
      .state;

    const temp = {
      code: codeState
    }

    await apiFecthLogin(temp);
    console.log(codeState, " == > ", state);
  }, [props]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Loading />;
}
