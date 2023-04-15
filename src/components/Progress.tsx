import React from "react";

const Progress = ({ porcentaje }) => {
  return (
    <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-indigo-600 h-2.5 rounded-full"
        style={{ width: `${porcentaje}%` }}
      ></div>
    </div>
  );
};

export default Progress;
