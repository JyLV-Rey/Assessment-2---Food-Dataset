import { useState } from "react";
import PriceTimelineChart from "./PriceTimelineChart";

export default function StorePriceHistory({ priceHistory }) {
  const [selectedStore, setSelectedStore] = useState(
    priceHistory[0]?.store || "",
  );

  const storeData = priceHistory.find((s) => s.store === selectedStore);

  return (
    <div className="items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full gap-10 p-4 text-sm text-center md:flex-row">
        <p>Select the store you want to view the price history of: </p>
        <select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="p-2 duration-200 ease-in-out border rounded hover:scale-110"
        >
          {priceHistory.map((store) => (
            <option key={store.store} value={store.store}>
              {store.store}
            </option>
          ))}
        </select>
      </div>
      <p className="text-3xl font-bold">{selectedStore}</p>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
        {storeData?.prices.map((price, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-full p-2 text-sm shadow-sm"
          >
            <div className="w-full text-xs">
              <PriceTimelineChart itemName={price.item} data={price.history} />
            </div>
          </div>
        ))}
      </div>
      <p className="p-5 text-sm">
        The price fluctuations are noisy due to the unit price being unstable
        overtime. This is not indicative of market trends or consumer behavior
        and the spikes and drops are most likely from random variation. The
        behavior is unpredictable as the price is dependent on a large number of
        factors that is not considered in the dataset alone, the amount of rows
        do not suffice for prediction.
      </p>
    </div>
  );
}
