export function getStoreStats(data) {
  const grouped = data.reduce(
    (acc, order) => {
      const { Store, Quantity, Total, MenuItem, Category } = order;

      if (!acc.stores[Store]) {
        acc.stores[Store] = {
          totalQuantity: 0,
          totalIncome: 0,
          orderCount: 0,
          items: new Map(),
          categories: new Set(),
        };
      }

      acc.stores[Store].totalQuantity += Number(Quantity);
      acc.stores[Store].totalIncome += Number(Total);
      acc.stores[Store].orderCount += 1;
      acc.stores[Store].items.set(MenuItem, Category);
      acc.stores[Store].categories.add(Category);

      // update grand totals
      acc.grandTotalQuantity += Number(Quantity);
      acc.grandTotalIncome += Number(Total);
      acc.grandOrderCount += 1;

      return acc;
    },
    {
      stores: {},
      grandTotalQuantity: 0,
      grandTotalIncome: 0,
      grandOrderCount: 0,
    },
  );

  const storeStats = Object.entries(grouped.stores)
    .map(([store, stats]) => ({
      store,
      totalQuantity: stats.totalQuantity,
      totalIncome: stats.totalIncome,
      orderCount: stats.orderCount,
      items: [...stats.items].map(([name, category]) => ({ name, category })),
      categories: [...stats.categories],
    }))
    .sort((a, b) => a.store.localeCompare(b.store));

  const grandTotals = {
    totalQuantity: grouped.grandTotalQuantity,
    totalIncome: grouped.grandTotalIncome,
    orderCount: grouped.grandOrderCount,
  };

  return { storeStats, grandTotals };
}
