import React, { useCallback, useContext, useEffect } from "react";
import Loading from "../components/core/Loading";
import Qs from "qs";
import { apiFecthLogin } from "../api/login";
import { storesContext } from "../context";
import { apiFetchUserByUserId } from "../api/users";
import { navigate } from "@reach/router";

export default function HomeCheck(props) {
  const { authenticationStore } = useContext(storesContext);

  const fetchData = useCallback(async () => {
    // const code = props.location.search.split("code=")
    const codeState = Qs.parse(props.location.search, {
      ignoreQueryPrefix: true,
    }).code;
    const state = Qs.parse(props.location.search, { ignoreQueryPrefix: true })
      .state;

    const temp = {
      code: codeState,
    };

    const res = await authenticationStore.signIn(temp);
    // const user = await authenticationStore.me()
    if (res.data.user_type === "st_group") {
      navigate("/nopermission");
    } else {
      if (state === "ksf_login") {
        try {
          const user = await apiFetchUserByUserId(res.data.user_id);
          if (user.data.role_id === "1" || user.data.role_id === "2") {
            navigate("/admin");
          } else if (user.data.role_id === "3") {
            navigate("/home");
          } else if (!user.data) {
            navigate("/register");
          }
        } catch (err) {
          navigate("/register");
        }
      } else {
        navigate("/register");
      }
    }
  }, [authenticationStore, props]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Loading />;
}
