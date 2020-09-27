import React, {  useState } from "react";
import Logo from "../core/Logo";
import BtnBack from "../core/BtnBack";
import { navigate } from "@reach/router";


export default function HowToPlay() {
  const [howToPlay, setHowToPlay] = useState({
    detail:"aaa"
  })
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Logo />
            </div>
            <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
              <video controls>
                <source src={"video_test/test.mp4"} type="video/mp4" />
              </video>
              <div class="text-center mx-auto my-4">
                <p className="text-gray-700 text-center text-lg ">
                  {howToPlay.detail}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-4 text-center mx-auto my-3">
            <BtnBack
              className="buttonBack"
              onClick={() => navigate("/qrscanner")}
              text="Back"
            />
          </div>
        </div>
      </div>
  )
}

// class HowToPlay extends Component {
//   state = {
//     result: "คำอธิบายที่ 1,2,3,4",
//   };
//   render() {
//     return (
      
//     );
//   }
// }

// export default HowToPlay;
