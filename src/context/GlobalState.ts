import { createContext } from "react";

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

export type InitialStateType = {
  transactions: TransactionType[] | [];
};

export type TransactionType = {
  id: string;
  text: string;
  amount: number;
  date: string;
  type: "income" | "expense";
};

export const initialState: InitialStateType = {
  transactions: localStorage.getItem("transactions")
    ? JSON.parse(localStorage.getItem("transactions")!)
    : [],
};

export const GlobalContext = createContext<ContextType | null>(null);
