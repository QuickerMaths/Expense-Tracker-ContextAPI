import { InitialStateType, TransactionType } from "./GlobalState";

export default (
  state: InitialStateType,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "add_transaction": {
      if (action.payload.type === "expense" && action.payload.amount > 0)
        action.payload.amount = -action.payload.amount;

      localStorage.setItem(
        "transactions",
        JSON.stringify([...state.transactions, action.payload])
      );

      return {
        transactions: [...state.transactions, action.payload],
      };
    }
    case "delete_transaction": {
      localStorage.setItem(
        "transactions",
        JSON.stringify(
          state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          )
        )
      );

      return {
        transactions: state.transactions.filter(
          (transaction: TransactionType) => transaction.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
