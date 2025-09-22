import MostOrderedCategoryPerStore from "./components/MostOrderedCategoryPerStore";
import MostOrderedDishesPerStore from "./components/MostOrderedDishesPerStore";
import RankStoresByQuantity from "./components/RankStoresByQuantity";
import RankStoresByProfit from "./components/RankStoresByProfit";
import data from "../../data.json";
import RankStoresByItemsSold from "./components/RankStoresByItemsSold";
import RankStoresByOrderID from "./components/RankStoresByOrderID";
export default function Store() {
  const stores = ["Store A", "Store B", "Store C", "Store D"];

  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-extrabold text-neutral-600">
          Store Statistics
        </h1>
        <h2 className="text-xl font-medium text-neutral-500">
          These are the statistics of the orders and the items of the stores.
        </h2>
      </div>
      <div className="grid w-full grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-sm w-fit shadow-lg/5">
          <p className="text-2xl font-extrabold">
            Most Ordered Category Per Store
          </p>
          <div className="grid items-center justify-center grid-cols-2 gap-2 w-fit">
            {stores.map((store, i) => (
              <div className="flex flex-col text-xs w-80">
                <MostOrderedCategoryPerStore
                  key={i}
                  storeName={store}
                  data={data}
                />
                <p className="font-bold text-center">{store}</p>
              </div>
            ))}
          </div>
          <p className="text-center break-words">
            All stores maintain a healthy balanced mix of Sides, Drinks, and
            Main Dishes. Main Dishes hold a slight overall lead, but no single
            category dominates enough to create risk. This even distribution
            highly suggests a stable menu that appeals broadly across locations!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-5 text-sm w-fit shadow-lg/5">
          <p className="text-2xl font-extrabold">
            Most Ordered Dishes Per Store
          </p>
          <div className="grid items-center justify-center grid-cols-2 gap-2 w-fit">
            {stores.map((store, i) => (
              <div className="flex flex-col text-xs w-80">
                <MostOrderedDishesPerStore
                  key={i}
                  storeName={store}
                  data={data}
                />
                <p className="font-bold text-center">{store}</p>
              </div>
            ))}
          </div>
          <p className="text-center">
            Chicken dominates the market in all stores as it is seen in the top
            of all of them. The subsequent orders include drinks (coffee, soda),
            most likely in tandem with the main dish. This diversity provides
            flexibility for promotions and helps protect revenue if preferences
            shift.
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col items-center justify-center gap-5 p-5 text-sm w-fit shadow-lg/5">
        <p className="text-2xl font-extrabold">Store Ranking</p>
        <div className="grid items-center justify-center grid-cols-3 gap-2 w-fit">
          <div className="flex flex-col text-xs w-80">
            <p className="text-lg font-bold text-center">Profit</p>
            <RankStoresByProfit data={data} />
          </div>
          <div className="flex flex-col text-xs w-80">
            <p className="text-lg font-bold text-center">Items Sold</p>
            <RankStoresByItemsSold data={data} />
          </div>
          <div className="flex flex-col text-xs w-80">
            <p className="text-lg font-bold text-center">Orders</p>
            <RankStoresByOrderID data={data} />
          </div>
        </div>
        <p className="text-center">
          The three ranking charts show a clear relationship between orders,
          quantity sold, and profit, however the correlation is not perfectly
          one-to-one. For show, stores B and C clearly lead in orders and items
          sold, store c has fewer items sold than b which lead to less profit
          despite having more orders, this suggests that the profit is only
          highly dependent on the number of items sold than the orders. Store D
          maintains competitive profit despite slightly fewer orders, this
          heavily suggests a higher average order value per transaction.
        </p>
      </div>
    </>
  );
}
