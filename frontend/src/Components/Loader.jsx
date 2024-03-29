import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-25 w-25 border-b-2 border-red-700" />
    </div>
  );
};

export default Loader;
