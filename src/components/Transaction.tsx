import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../context/GlobalState";

interface Props {
  transaction: TransactionType;
}

const Transaction: React.FC<Props> = ({
  transaction: { text, amount, id, type, date },
}) => {
  const { dispatch } = useContext(GlobalContext)!;

  return (
    <li className="flex justify-between items-center bg-white rounded-md gap-5 py-2 px-5 md:px-10 ">
      <p className="font-bold text-xl">{text}</p>
      <p
        className={`text-xl ${
          type === "expense" ? "text-red-500" : "text-green-500"
        }`}
      >
        {amount}$
      </p>
      <p className="text-sm text-gray-400">{date}</p>
      <button
        className="bg-red-600 text-white px-2 rounded-md hover:bg-red-300 transition-colors "
        onClick={() => dispatch({ type: "delete_transaction", payload: id })}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;
