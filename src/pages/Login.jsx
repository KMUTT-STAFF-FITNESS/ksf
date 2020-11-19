import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnRigis from "../components/core/BtnBack";
import * as Yup from "yup";
import { navigate } from "@reach/router";
import { Helmet } from "react-helmet";

export default function Login() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  return (
    // <div className="max-w-screen-xl mx-auto min-h-screen">
    //   <div className="lg:w-2/3 bg-gray-900"></div>
    //   <div className="w-full lg:w-1/3">
    //     <div className="col-12 text-center">
    //       <Logo />
    //     </div>
    //     <div className="row justify-content-center">
    //       <div className="w-full lg:w-1/3 overflow-x-hidden py-4 mx-auto">
    //         <div className=" py-4">
    //           <BtnNext text="Login via SSO" />
    //           <BtnRigis
    //             text="Register via SSO"
    //             onClick={() => navigate("/register")}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>KSF</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto">
        <div className="w-0 lg:w-2/3 bg-black">
          <img src="/image/sample.png" alt="" />
        </div>
        <div className="w-full lg:w-1/3 px-2">
          <Logo />
          <BtnNext
            text="Login via SSO"
            onClick={() =>
              navigate(
                `https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://localhost:3000/home&state=ksf`
              )
            }
          />
          <BtnRigis
            text="Register via SSO"
            onClick={() => navigate("/register")}
          />
        </div>
      </div>
    </div>
  );
}
