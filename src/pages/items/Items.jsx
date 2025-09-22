import {
  mostOrderedItems,
  mostExpensiveItems,
  mostOrderedCategories,
  mostExpensiveCategories,
  buildPriceHistory,
} from "./components/helpers";
import HeroRankChart from "./components/HeroRankChart";
import data from "../../data.json";
import PriceTimelineChart from "./components/PriceTimelineChart";

export default function Items() {
  const mostOrderedItemsData = mostOrderedItems(data);
  const mostExpensiveItemsData = mostExpensiveItems(data);
  const mostOrderedCategoriesData = mostOrderedCategories(data);
  const mostExpensiveCategoriesData = mostExpensiveCategories(data);
  const priceHistory = buildPriceHistory(data);

  console.log(priceHistory);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-extrabold text-neutral-600">
          Item Statistics
        </h1>
        <h2 className="text-xl font-medium text-neutral-500">
          These are the statistics of all of the items.
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-sm w-fit shadow-lg/5">
          <p className="text-3xl font-extrabold">Category Breakdown</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {" "}
            <HeroRankChart
              title="Most Ordered Categories"
              data={mostOrderedCategoriesData}
              dataKey="quantity"
            />
            <HeroRankChart
              title="Most Expensive Categories"
              data={mostExpensiveCategoriesData}
              dataKey="avgPrice"
              color="#d4b4f2"
            />
          </div>

          <p className="text-center break-words">
            The stores consistently have the drink as the lowest price and the
            least ordered, suggesting that its more often ordered and considered
            as something supplementary to the side/main. The main dishes having
            more orders could be influenced by having merely the same price as
            the side dishes, which could indicate that they'd rather spend the
            money on fulfilling dishes if they would be spending the same price.
            This also reflects well on realistic scenarios where you would
            settle for more if its the same price anyway.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-sm w-fit shadow-lg/5">
          <p className="text-3xl font-extrabold">Items Breakdown</p>
          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            {" "}
            <HeroRankChart
              title="Most Ordered Items"
              data={mostOrderedItemsData}
              dataKey="quantity"
              color="#ff4fd4"
            />
            <HeroRankChart
              title="Most Expensive Items"
              data={mostExpensiveItemsData}
              dataKey="price"
              color="#FF3D63"
            />
          </div>

          <p className="text-center break-words">
            Chicken leads all products by a wide margin, even topping the sales
            across all the stores. This is followed by soda and coffee,
            indicating that simple, versatile options remain the safest bet
            across all stores. The most expensive items, meanwhile, led by pizza
            and coffee, which combine high unit price with steady demand. This
            overlap of popularity and price suggests that customers are willing
            to pay slightly more for items that deliver familiarity and
            perceived value like the delicious chicken. Knowing these trends are
            crucial to maintain supply for the items in demand.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col items-center justify-center w-full gap-2 mt-5 text-center">
        <p className="text-3xl font-extrabold">Item Price History</p>
        <p className="text-xl">
          This is how much each item changed in price throughout the entire
          dataset
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {priceHistory.map((store, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-full p-2 text-sm shadow-sm"
            >
              <p className="text-3xl font-extrabold">{store.store}</p>
              {store.prices.map((price, i) => (
                <div key={i} className="w-full text-xs">
                  <PriceTimelineChart
                    itemName={price.item}
                    data={price.history}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
