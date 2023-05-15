import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import UA from "./components/UA";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from "./components/Chart";

function App() {
  const {
    state: { transactions },
  } = useContext(GlobalContext)!;

  return (
    <>
      <main className="bg-gray-200 flex justify-center items-center py-[50px] flex-col-reverse md:flex-row min-h-screen">
        <Chart />
        <div className=" w-[35%] flex flex-col items-center">
          <Header />
          <Balance />
          {transactions.length > 0 && <History />}
          <IncomeExpense />
          <UA />
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
