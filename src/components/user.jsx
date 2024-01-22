// user.jsx
import React from "react";

export const User = ({ nama, gender }) => {
  const backgroundColor = gender === "female" ? "bg-rose-300" : "bg-blue-300";

  return (
    <div className={`${backgroundColor} p-4`}>
      <div>Nama: {nama}</div>
    </div>
  );
};
