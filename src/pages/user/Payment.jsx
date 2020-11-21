import React, { useCallback, useContext, useEffect, useState } from "react";
import QRpayment from "../../components/Register/QRPayment";
import Logo from "../../components/core/Logo";
import { storesContext } from "../../context";
import { apiFetchUserByUserId } from "../../api/users";
import Loading from "../../components/core/Loading";
import { apiPayCash } from "../../api/image";
import { navigate } from "@reach/router";

export default function Payment() {
  const { authenticationStore } = useContext(storesContext);
  const [isFetch, setIsFetch] = useState(false);
  const [user, setUser] = useState();

  const fecthData = useCallback(async () => {
    setIsFetch(true);
    const usr = await apiFetchUserByUserId(authenticationStore.currentUserId);
    setUser(usr.data);
    setIsFetch(false);
  }, [authenticationStore]);

  useEffect(() => {
    fecthData();
  }, [fecthData]);

  const handleCash = async () => {
    const data = {
      profile_id: user.profile_id,
      receipt_path: "cash",
    };
    await apiPayCash(data);
    navigate("/wait");
  };

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="col-12">
        <Logo />
        <div className=" mx-auto">
          <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">
            <QRpayment handleCash={handleCash} />
          </div>
        </div>
      </div>
    </div>
  );
}
