export function getStoreStats(data) {
  const grouped = data.reduce((acc, order) => {
    const { Store, Quantity, Total, MenuItem, Category } = order;

    if (!acc[Store]) {
      acc[Store] = {
        totalQuantity: 0,
        totalIncome: 0,
        orderCount: 0, // ✅ new field
        items: new Map(),
        categories: new Set(),
      };
    }

    acc[Store].totalQuantity += Number(Quantity);
    acc[Store].totalIncome += Number(Total);
    acc[Store].orderCount += 1;
    acc[Store].items.set(MenuItem, Category);
    acc[Store].categories.add(Category);

    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([store, stats]) => ({
      store,
      totalQuantity: stats.totalQuantity,
      totalIncome: stats.totalIncome,
      orderCount: stats.orderCount,
      items: [...stats.items].map(([name, category]) => ({ name, category })),
      categories: [...stats.categories],
    }))
    .sort((a, b) => a.store.localeCompare(b.store)); // keep alphabetical order
}
