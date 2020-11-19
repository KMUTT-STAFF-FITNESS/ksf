import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logo from "../components/core/Logo";
import BtnNext from "../components/core/BtnNext";
import BtnRigis from "../components/core/BtnBack";
import * as Yup from "yup";
import { navigate } from "@reach/router";
import { Helmet } from "react-helmet";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>KSF</title>
      </Helmet>

      <div className="flex flex-1 overflow-auto">
        <div
          className="w-0 lg:w-2/3"
          style={{
            backgroundImage: `url('/image/LoginWallpaper.png')`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-full lg:w-1/3 px-2">
          <Logo />
          <BtnNext
            text="Login via SSO"
            onClick={() =>
              navigate(
                `https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://localhost:3000/home&state=ksf_login`
              )
            }
          />
          <BtnRigis
            text="Register via SSO"
            onClick={() =>
              navigate(
                `https://std-sso-fe.sit.kmutt.ac.th/login?response_type=code&client_id=u1UOLdKI&redirect_uri=http://localhost:3000/home&state=ksf_register`
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
