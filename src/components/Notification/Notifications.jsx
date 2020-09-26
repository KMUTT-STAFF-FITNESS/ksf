// import React, { Component } from "react";

// class Notifications extends Component {
//   state = {
//     role: "Admin",
//     detail: "None",
//     timeSpand: "11 mins ago"
//   };

//   render() {
//     return (
//       <div className="container">
//         <div className="col-12">
//           <div className="text-center mx-auto">
//             <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">
//               <div className="row">
//                 <div className="text-left mx-auto">
//                   <strong className="mr-auto">KSF</strong>
//                 </div>
//                 <div className="text-right text-gray-700 mx-auto">
//     <small>{}</small>
//                 </div>

//                 <div>{this.state.detail}</div>
//                 <div className="text-right mx-auto">
//                   <small>{this.state.role}</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Notifications;
import React, { useState } from "react";

export default function Notifications() {
  const [noti, setNoti] = useState({
    role: "Admin",
    detail: "Example na ja....",
    timeSpand: "11 mins ago",
  });
  return (
    <div>
      <div className="container">
        <div className="col-12">
          <div className="text-center mx-auto">
            <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">
              <div className="row">
                <div className="text-left mx-auto">
                  <strong className="text-lg font-bold mr-auto">KSF</strong>
                </div>
                <div className="text-right text-gray-700 mx-auto">
                  <small>{noti.timeSpand}</small>
                </div>
              </div>
              <p class="text-gray-700">
                {noti.detail}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
