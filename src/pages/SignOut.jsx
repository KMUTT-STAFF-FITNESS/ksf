import React, { useEffect, useContext, useCallback } from "react";
import { navigate } from "@reach/router";

import { storesContext } from "../context";

export default function SignOut() {
  /**
  |--------------------------------------------------
  | Contexts
  |--------------------------------------------------
  */
  const { authenticationStore } = useContext(storesContext);

  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  const handleSignout = useCallback(async () => {
    try {
      authenticationStore.signOut();
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  }, [authenticationStore]);

  useEffect(() => {
    handleSignout();
  }, [handleSignout]);

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return <div></div>;
}
