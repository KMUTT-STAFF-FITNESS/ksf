import React, { useState, useCallback, useEffect } from "react";
import ImageProfile from "../core/ImageProfile";
import BtnBack from "../core/BtnBack";
import { navigate } from "@reach/router";
import { apiFetchExerciseId } from "../../api/exercise";
import { PieChart } from "react-minimal-pie-chart";

export default function Dashboard() {

  
  //---------------------ตรงนี้--------------------------------
//   const [isFetch, setIsFetch] = useState(false);
//   const [dashboard, setDashboard] = useState();
//   const [selected, setSelected] = useState(0);
//   const fetchData = useCallback(async () => {
//     setIsFetch(true);
//     const { data } = await apiFetchExerciseId();
//     setDashboard(data);
//     console.log(data);
//     setIsFetch(false);
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   if (isFetch) {
//     return <div>wait....</div>;
//   }
//   return (
//     <div className="max-w-screen-xl mx-auto min-h-screen">
//       <div className="container ">
//         <div className="row">
//           <div className="col-12">
//             <div className="cardcolor rounded-lg m-6 lg:max-shadow col-12 mx-auto">
//               <ImageProfile />
//             </div>
//             <PieChart
//               radius={50 - 6}
//               lineWidth={60}
//               animate
//               onClick={(_, index) => {
//                 setSelected(index === selected ? undefined : index);
//               }}  
//               segmentsShift={(index) => (index === selected ? 6 : 1)}
//               segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
//               data={[
//                 { title: "One", value: 10, color: "#E38627" },
//                 { title: "Two", value: 15, color: "#C13C37" },
//                 { title: "Three", value: 20, color: "#6A2135" },
//               ]}
//             />
//  ---------------------ถึงตรงนี้--------------------------------
            {/* <div>
            <div className="row">
              <div className="col-6">
                <div className="p-3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold ">
                  Day
                  <h3 class="text-center">
                    {exercise_id}
                  </h3>
                </div>
              </div>
              <div className="col-6 ">
                <div className="p-3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                  Month
                  <h3 class="text-center">
                    {this.state.Month}
                    hr
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 py-4">
                <div className="p-3  overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                  Year
                  <h3 class="text-center">
                    {this.state.Year}
                    hr
                  </h3>
                </div>
              </div>
              <div className="col-6 py-4">
                <div className="p-3  overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                  Most Playing
                  <h3 class="text-center">{this.state.MostPlaying}</h3>
                </div>
              </div>
            </div>
          </div> */}

          //--------------------ต่อ----------------------------------
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-4 py-4 mx-auto">
  //           <BtnBack text="Back" onClick={() => navigate("/home")} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
