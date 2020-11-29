import React from "react";
import ImageUploading from "react-images-uploading";
import BtnNext from "../core/BtnNext";

export default function Upload(props) {
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    props.setImage(imageList);
  };

  return (
    <div>
      <div class="title">
        <p className="text-gray-700 text-lg text-center font-bold">
          อัปโหลดหลักฐานการชำระเงิน
        </p>
      </div>
      <ImageUploading
        value={props.images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemove }) => (
          <div className="upload__image-wrapper">
            <div className="text-center mx-auto d-block py-3">
              {imageList.length === 0 ? (
                <div
                  style={{
                    height: "400px",
                    backgroundColor: "#D3D3D3",
                  }}
                  className="w-full"
                ></div>
              ) : (
                imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image["data_url"]}
                      alt=""
                      height="400"
                      className="w-full"
                    />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <BtnNext onClick={onImageUpload} text="Upload here" />
            &nbsp;
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
