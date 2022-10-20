import React from "react";

function UserDropdown() {
  return (
    <div
      className="absolute top-full right-0 bg-cosmic-dust/40 text-vivid-orange text-lg w-40 px-3 mt-3 py-2 rounded-xl backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="py-2 cursor-pointer hover:text-tin-color">
        สถานะการสั่งซื้อ
      </div>
      <div className="py-2 cursor-pointer hover:text-tin-color">
        ร้านค้าของฉัน
      </div>
      <div className="py-2 cursor-pointer hover:text-tin-color">ตั้งค่า</div>
      <div className="py-2 cursor-pointer hover:text-tin-color">Log out</div>
    </div>
  );
}

export default UserDropdown;