import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext)!;

  const income = transactions
    .map((transaction) =>
      transaction.type === "income" ? transaction.amount : 0
    )
    .reduce((acc, item) => (acc += item), 0);

  const expense = transactions
    .map((transaction) =>
      transaction.type === "expense" ? transaction.amount : 0
    )
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="bg-white rounded-md flex gap-20 mt-10 shadow-md py-10 px-10 md:px-20">
      <div className="text-center">
        <p className="text-xl uppercase">Income</p>
        <p className="text-3xl font-bold text-green-600 mt-2">{income}$</p>
      </div>
      <div className="text-center">
        <p className="text-xl uppercase">Expense</p>
        <p className="text-3xl font-bold text-red-600 mt-2">{expense}$</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
