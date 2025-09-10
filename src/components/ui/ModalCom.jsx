const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// src/components/ui/ModalCom.jsx
import React from "react";

function ModalCom({ showModel, setShowModel, children }) {
  if (!showModel) return null; // don’t render when closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setShowModel(false)}
      ></div>

      {/* Modal Content */}
      <div className="bg-white relative z-50 p-6 rounded-lg shadow-lg w-96">
        {children}
      </div>
    </div>
  );
}

export default ModalCom;
