import React, { Component } from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient(to top right, #192527 -17%, #c2691c 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient(to top right, #192527 -17%, #c2691c 100%)",
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage: "linear-gradient(to right, #192527 0%, #c2691c 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient(to right, #192527 0%, #c2691c 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
});

class Notifications extends Component {

  state = {
    role: 'Admin',
    detail: 'None'
  }

  render() {
    return (
      <div className="container">
          <div className="col-12">

            <div className="text-center mx-auto">
              <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">

                <div className="row">
                  <div className="text-left mx-auto">
                    <strong className="mr-auto">KSF</strong>
                  </div>
                  <div className="text-right mx-auto">
                    <small>11 mins ago</small>
                  </div>
                </div>
                <div>
                  {this.state.detail}
                </div>
                <div className="text-right mx-auto">
                  <small>{this.state.role}</small>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
}
export default Notifications;
