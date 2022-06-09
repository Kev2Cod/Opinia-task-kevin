import React from "react";
import "./notification.css";
export default function Notification() {
  return (
    <>
      <div className="card-notification shadow-sm">
        <span className="d-block">Melengkapi profil membantu kami memvalidasi akun Anda, dan memudahkan Opinian lainnya memahami Anda</span>
        <span className="text-var-grey-dark">Lengkapi Profile Anda 5/8</span>
        <div className="d-flex justify-content-center ">
          <div className="status-profile">
            <div className="loading"></div>
          </div>
        </div>
      </div>
    </>
  );
}
