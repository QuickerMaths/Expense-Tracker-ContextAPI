import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext)!;

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center">Balance: </h2>
      <p className="text-5xl font-bold">${balance}</p>
    </div>
  );
};

export default Balance;
