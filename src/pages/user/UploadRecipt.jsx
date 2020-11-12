import React from "react";
import Logo from "../../components/core/Logo";
import Upload from "../../components/Register/Upload";

export default function UploadRecipt() {
  return (
    <div className="container">
      <div className="col-12">
        <Logo />
        <div className="mx-auto">
          <div className="px-3 w-full overflow-hidden py-4 rounded shadow mx-auto">
            <Upload />
          </div>
        </div>
      </div>
    </div>
  );
}
