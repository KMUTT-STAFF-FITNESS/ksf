import { navigate } from "@reach/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { storesContext } from "../context";
import Loading from "./core/Loading";
import { apiFetchUserByUserId } from "../api/users";

export default function UserMainLayout(props) {
  const { component: Child } = props;

  const { authenticationStore } = useContext(storesContext);

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  function onAuthen() {
    setIsCheckingAuth(false);
    setIsNotSigned(false);
  }

  const checkAuth = useCallback(async () => {
    try {
      if (Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)) {
        await authenticationStore.me();

        if (authenticationStore.currentUser) {
          const usr = await apiFetchUserByUserId(
            authenticationStore.currentUserId
          );

          if (usr.data.is_member) {
            navigate("/home");
          } else {
            navigate("/wait");
          }
          onAuthen();
          setIsCheckingAuth(false);
          return;
        }
      }

      setIsNotSigned(true);
      setIsCheckingAuth(false);
    } catch (error) {
      console.error(error);
      setIsNotSigned(true);
      setIsCheckingAuth(false);
    }
  }, [authenticationStore, props]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <Loading />;
  }

  if (isNotSigned) {
    return navigate(
      "https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://localhost:3000/checking&state=ksf_login"
    );
  }
  return <Child {...props} />;
}
