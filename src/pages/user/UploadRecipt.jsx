import { navigate } from "@reach/router";
import React, { useState } from "react";
import { apiUploadSlip } from "../../api/image";
import BtnNext from "../../components/core/BtnNext";
import Logo from "../../components/core/Logo";
import Upload from "../../components/Register/Upload";

export default function UploadRecipt() {
  const [images, setImage] = useState([]);

  const handleSubmit = async () => {
    console.log(images[0])
    const formData = new FormData()
    formData.append("file", images[0].file)
    const res = await apiUploadSlip(formData)
    console.log(res)
    navigate('/wait')
  };

  return (
    <div className="container">
      <div className="col-12">
        <Logo />
        <div className="mx-auto">
          <div className="px-3 w-full overflow-hidden pt-4 pb-2 rounded shadow mx-auto">
            <Upload images={images} setImage={setImage}/>
          </div>
          <div className="my-3">
            <BtnNext text="Submit" onClick={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </div>
  );
}
