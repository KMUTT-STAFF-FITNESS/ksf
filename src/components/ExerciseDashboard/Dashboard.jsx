import React, { Component } from "react";
import ImageProfile from "../core/ImageProfile";
import { Formik, Form, Field } from "formik";

class Dashboard extends Component {
    state = {
      Day: '1.2',
      Month: '15',
      Year: '100',
      MostPlaying: 'Treadmill'
    }
    render() {
      return (
        <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="cardcolor rounded-lg m-6 lg:max-shadow col-6 mx-auto">
                          <ImageProfile />
  
                      </div>
                      <div>
                          <div className="row">
                              <div className="col-6 ">
                                  <div className="p-3 lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                                      Day
                                      <h3 class="text-center">
                                          {this.state.Day}
                                          hr
                                      </h3>
                                  </div>
                              </div>
                              <div className="col-6 ">
                                  <div className="p-3 lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                                      Month
                                      <h3 class="text-center">
                                      {this.state.Month}
                                      hr
                                      </h3>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-6 ">
                                  <div className="p-3 lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                                      Year
                                      <h3 class="text-center">
                                      {this.state.Year}
                                      hr
                                      </h3>
                                  </div>
                              </div>
                              <div className="col-6 ">
                                  <div className="p-3 lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto text-gray-700 text-lg font-bold">
                                      Most Playing
                                      <h3 class="text-center">
                                      {this.state.MostPlaying}
                                      
                                      </h3>
                                  </div>
                              </div>
                          </div>
  
                      </div>
                  </div>
              </div>
          </div>
      )
    }
  
  }
  
  export default Dashboard;