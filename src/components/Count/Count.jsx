import { decrement, increment } from "@/app/redux/features/countSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-200 px-2"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h1>Cantidad: {count}</h1>
      <button
        className="bg-blue-200 px-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Count;
