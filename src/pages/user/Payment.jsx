import React from 'react'
import QRpayment from '../../components/Register/QRPayment'
import Logo from "../../components/core/Logo";

export default function Payment() {
    return (
        <div className="container">
        <div className="col-12">
            <Logo/>
            <div className=" mx-auto">
            <div className=" p-3 w-full  overflow-hidden py-4 rounded shadow mx-auto">
            <QRpayment/>
        </div>
        </div>
        </div>
        </div>
    )
}
