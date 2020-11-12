import { navigate } from "@reach/router";
import React, { useState } from "react";
import BtnNext from "../../components/core/BtnNext";
import Logo from "../../components/core/Logo";
import Upload from "../../components/Register/Upload";

export default function UploadRecipt() {
  const [images, setImage] = useState([]);

  const handleSubmit = () => {
    console.log(images)
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
