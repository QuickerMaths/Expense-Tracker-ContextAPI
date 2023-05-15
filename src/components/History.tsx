import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const History = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext)!;

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold underline text-center">History</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default History;
