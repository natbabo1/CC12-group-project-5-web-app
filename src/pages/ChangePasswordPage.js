import React from "react";

function ChangePasswordPage() {
  return (
    <form>
      <div className="pt-20 flex justify-center">
        <div className="flex flex-col gap-6 w-4/6 ">
          <span className="text-vivid-orange pl-4">เปลี่ยนรหัสผ่าน</span>
          <input
            type="text"
            className="block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange"
            placeholder="Old Password"
          />

          <button className="text-[#29C6CD] text-right">ลืมรหัสผ่าน ?</button>

          <input
            type="text"
            className="block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange"
            placeholder="New Password"
          />

          <input
            type="text"
            className="block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange"
            placeholder="Confirm New Password"
          />
          <div className="flex justify-end">
            <button
              className={`text-white flex items-center justify-center bg-vivid-orange h-10 w-36 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white 
          }`}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ChangePasswordPage;