import data from "../../data.json";
import { getStoreStats } from "./helpers";
export default function Home() {
  const storeStats = getStoreStats(data);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-extrabold text-neutral-600">
          Basic Store Statistics
        </h1>
        <h2 className="text-xl font-medium text-neutral-500">
          Here are the base general stats of the store dataset.
        </h2>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 p-5 overflow-visible">
        <div className="flex flex-row flex-wrap items-center justify-center p-5 w-fit shadow-2xl/10">
          {storeStats.map((s) => (
            <div
              key={s.store}
              className="flex flex-col gap-3 p-5 text-sm text-center rounded-lg text-neutral-600 shadow-md/5"
            >
              <div className="p-2 rounded-lg shadow-md/5">
                <h3 className="text-2xl font-bold text-neutral-700">
                  {s.store}
                </h3>
              </div>
              <div className="p-2 rounded-lg shadow-md/5">
                <p>
                  Total Orders:{""}
                  <span className="font-bold"> {s.orderCount}</span>
                </p>
                {""}
                <p>
                  Total Quantity Sold:{""}
                  <span className="font-bold"> {s.totalQuantity}</span>
                </p>
                <p>
                  Total Income:{""}
                  <span className="font-bold"> ₱{s.totalIncome}</span>
                </p>
                {""}
              </div>

              <h4 className="font-bold">Items:</h4>
              <ul className="flex flex-col items-center gap-2">
                {s.items.map((item) => (
                  <li key={item.name} className="">
                    {item.name} ({item.category})
                  </li>
                ))}
              </ul>
              <div className="p-2 rounded-lg shadow-md/5">
                <h4 className="font-bold">Categories:</h4>
                <p>{s.categories.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
