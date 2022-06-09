import React from "react";
import "./notification.css";
export default function Notification() {
  return (
    <>
      <div className="card-notification shadow-sm">
        <span className="d-block">Melengkapi profil membantu kami memvalidasi akun Anda, dan memudahkan Opinian lainnya memahami Anda</span>
        <span className="text-var-gray-dark">Lengkapi Profile Anda 5/8</span>
        <div className="">
          <div class="progress-bar">
            <span class="progress-bar-fill" style={{ width: "70%" }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
