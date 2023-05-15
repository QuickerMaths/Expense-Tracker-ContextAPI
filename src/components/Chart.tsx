import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext)!;

  const data = {
    labels: transactions.map((transaction) => transaction.text),
    datasets: [
      {
        label: "Amount",
        data: transactions.map((transaction) => transaction.amount),
        backgroundColor: (context: {
          dataIndex: any;
          dataset: { data: { [x: string]: any } };
        }) => {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value < 0 ? "rgba(220,20,60,0.7)" : "rgba(50,205,50,0.7)";
        },
        borderWidth: 1,
        borderRadius: 20,
        spacing: 10,
      },
    ],
  };

  return (
    <div
      className="
   w-[70%] md:w-[35%] py-[50px] md:py-[0xp]"
    >
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
