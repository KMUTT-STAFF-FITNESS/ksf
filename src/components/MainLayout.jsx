import React, { useCallback, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { storesContext } from "../context";
import Cookies from "js-cookie";

import Sidebar from "./Sidebar";
import Loading from "./core/Loading";
import { navigate } from "@reach/router";

export default function MainLayout(props) {
  const { component: Child } = props;

  /**
  |--------------------------------------------------
  | Contexts
  |--------------------------------------------------
  */
  const { authenticationStore } = useContext(storesContext);

  /**
  |--------------------------------------------------
  | States
  |--------------------------------------------------
  */
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  function onAuthen() {
    setIsCheckingAuth(false);
    setIsNotSigned(false);
  }

  const checkAuth = useCallback(async () => {
    try {
      if (Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)) {
        await authenticationStore.me();
        if (authenticationStore.currentUser) {
          // if (props.superAdminOnly && !authenticationStore.isSuperAdmin) {
          //   navigate(`/`);
          // }
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
  }, [authenticationStore]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */

  if (isCheckingAuth) {
    return <Loading />;
  }

  if (isNotSigned) {
    return navigate(
      "https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://localhost:3000/checking&state=ksf_login"
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>KSF</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto">
        <Sidebar
          currentTab={props.currentTab}
          currentSubTab={props.currentSubTab}
        />
        <div className="flex flex-1">
          <Child {...props} />
        </div>
      </div>
    </div>
  );
}
