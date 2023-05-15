import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import nextId from "react-id-generator";
import useToastCreator from "../hooks/useCreateToast";

const UA = () => {
  const { dispatch } = useContext(GlobalContext)!;

  const [transaction, setTransaction] = useState({ text: "", amount: 0 });
  const [type, setType] = useState<"income" | "expense" | "">("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "") {
      useToastCreator("Please select type of transaction", "error");
      return;
    }

    dispatch({
      type: "add_transaction",
      payload: {
        id: nextId(),
        text: transaction.text,
        amount: Number(transaction.amount),
        date: new Date().toLocaleDateString(),
        type,
      },
    });

    setTransaction({ text: "", amount: 0 });
    setType("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-center underline">
        New transaction
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center mt-5"
      >
        <label htmlFor="text">Transaction</label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Transaction"
          required
          value={transaction.text}
          onChange={handleChange}
          className="w-[300px] md:w-[400px] mt-2 text-xl rounded-md p-2"
        />
        <label htmlFor="amount" className="mt-5">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Amount"
          required
          value={transaction.amount}
          onChange={handleChange}
          className="w-[300px] md:w-[400px] mt-2 text-xl rounded-md p-2"
        />
        <div>
          <button
            type="button"
            className={`${
              type === "income" ? "bg-green-600" : "bg-green-300"
            } mt-5 text-xl  rounded-md py-2 px-5 md:px-10 text-black border-black border-2 cursor-pointer mr-2`}
            onClick={() => setType("income")}
          >
            Income
          </button>
          <button
            type="button"
            className={`${
              type === "expense" ? "bg-red-600" : "bg-red-300"
            } mt-5 text-xl  rounded-md py-2 px-5 md:px-10 text-black border-black border-2 cursor-pointer mr-2`}
            onClick={() => setType("expense")}
          >
            Expense
          </button>
        </div>
        <button
          type="submit"
          className="mt-5 text-xl bg-blue-200 rounded-md py-2 px-10 text-black border-black border-2 cursor-pointer"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default UA;
