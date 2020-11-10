import React from "react";
import { navigate } from "@reach/router";

export default function QRPayment() {
  return (
    <div>
      <div class="title">
        <p className="text-gray-700 text-lg font-bold">ชำระค่าสมาชิก</p>
      </div>

      <div class="imageQRCode">
        <img className="mx-auto" src="image/qr.jpg" width="350px" alt="" />
      </div>

      <div class="text">
        <p className="text-gray-700 text-lg my-4 font-bold">หรือ</p>

        <div class="flex mb-4">
          <div class="w-1/2  h-12">ธนาคารกรุงเทพ (BBL)</div>
          <div class="w-1/2  h-12">037-7-00008-8</div>
        </div>
        <div class="flex mb-4">
          <div class="w-1/2  h-12">ธนาคารกรุงไทย (KTB)</div>
          <div class="w-1/2  h-12">465-0-21071-2</div>
        </div>

        <div class="flex mb-4">
          <div class="w-1/2  h-12">ธนาคารไทยพาณิชย์ (SCB)</div>
          <div class="w-1/2  h-12">237-2-00006-3</div>
        </div>

        <div class="flex mb-4">
          <div class="w-1/2  h-12">ธนาคารกรุงศรีอยุธยา (BAY)</div>
          <div class="w-1/2  h-12">330-1-38564-9</div>
        </div>

        <div class="flex mb-4">
          <div class="w-1/2  h-12">ธนาคารกสิกรไทย (KBANK)</div>
          <div class="w-1/2  h-12">705-2-46600-2</div>
        </div>
      </div>
      <div className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center cursor-pointer my-2"
      onClick={() => navigate("/wait")}>ชำระด้วยเงินสด</div>
    </div>
  );
}
