import { navigate } from "@reach/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { apiUploadSlip } from "../../api/image";
import { apiFetchUserByUserId } from "../../api/users";
import BtnNext from "../../components/core/BtnNext";
import Loading from "../../components/core/Loading";
import Logo from "../../components/core/Logo";
import Upload from "../../components/Register/Upload";
import { storesContext } from "../../context";


export default function UploadRecipt() {
  const { authenticationStore } = useContext(storesContext);
  const [images, setImage] = useState([]);
  const [user, setUser] = useState();
  const [isFetch, setIsFetch] = useState(false);

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("file", images[0].file);
    const res = await apiUploadSlip(user.profile_id, formData);
    navigate("/wait");
  };
  const fecthData = useCallback(async () => {
    setIsFetch(true);
    const usr = await apiFetchUserByUserId(authenticationStore.currentUserId);
    setUser(usr.data);
    setIsFetch(false);
  }, [authenticationStore]);

  useEffect(() => {
    fecthData();
  }, [fecthData]);

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
        <div className="mx-auto">
          <div className="px-3 w-full overflow-hidden pt-4 pb-2 rounded shadow mx-auto">
            <Upload images={images} setImage={setImage} />
          </div>
          <div className="my-3">
            <BtnNext text="Submit" onClick={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </div>
  );
}
