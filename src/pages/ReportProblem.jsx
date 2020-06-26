import React from 'react'
import ReportInput from '../components/ReportProblem/Report'
import Logo from "../components/core/Logo";

export default function ReportProblem() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
        <div className="p-3 w-full lg:w-1/3 overflow-hidden py-4 rounded shadow mx-auto">
            <ReportInput/>
        </div>
        </div>
        </div>
    )
}
