import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import { Link } from "@reach/router";
import PrimaryButton from "../core/PrimaryButton";

export default function EditHeader(props) {
  return (
    <div className="border-b">
      <div className="flex-1 p-6">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/radionews">
            <p className="text-sm hover:underline">ข่าวกรองสัญญาณ (วิทยุ)</p>
          </Link>
          <p className="text-sm text-primary">สร้างรายการ{props.title}</p>
        </Breadcrumbs>
        <div className="flex justify-between">
          <p className="text-lg mt-2">สร้างรายการ{props.title}</p>
          <div className="text-right">
            <PrimaryButton
              className="px-10"
              type="submit"
              onClick={props.formik.submitForm}
            >
              สร้าง
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
