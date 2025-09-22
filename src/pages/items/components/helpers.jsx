// 🔹 Top 10 Most Ordered Items by total quantity
export function mostOrderedItems(data) {
  const itemStats = data.reduce((acc, row) => {
    const item = row.MenuItem;
    const qty = Number(row.Quantity);
    if (!isNaN(qty)) {
      acc[item] = (acc[item] || 0) + qty;
    }
    return acc;
  }, {});

  return Object.entries(itemStats)
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 10);
}

// 🔹 Top 10 Most Expensive Items by highest single UnitPrice
export function mostExpensiveItems(data) {
  const priceStats = {};

  data.forEach((row) => {
    const item = row.MenuItem;
    const price = Number(row.UnitPrice);
    if (!isNaN(price)) {
      if (!priceStats[item]) {
        priceStats[item] = { total: 0, count: 0 };
      }
      priceStats[item].total += price;
      priceStats[item].count += 1;
    }
  });

  return Object.entries(priceStats)
    .map(([name, { total, count }]) => ({
      name,
      price: total / count,
    }))
    .sort((a, b) => b.price - a.price)
    .slice(0, 10);
}

export function mostOrderedCategories(data) {
  const categoryStats = data.reduce((acc, row) => {
    acc[row.Category] = (acc[row.Category] || 0) + Number(row.Quantity);
    return acc;
  }, {});
  const chartData = Object.entries(categoryStats)
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => b.quantity - a.quantity);

  return chartData;
}
export function mostExpensiveCategories(data) {
  const categoryPriceStats = {};

  data.forEach((row) => {
    const price = Number(row.UnitPrice);
    if (isNaN(price)) return;

    if (!categoryPriceStats[row.Category]) {
      categoryPriceStats[row.Category] = { total: 0, count: 0 };
    }
    categoryPriceStats[row.Category].total += price;
    categoryPriceStats[row.Category].count += 1;
  });

  return Object.entries(categoryPriceStats)
    .map(([name, v]) => ({
      name,
      avgPrice: v.count ? v.total / v.count : 0, // avoid NaN if count = 0
    }))
    .sort((a, b) => b.avgPrice - a.avgPrice);
}

// ThIS TOOK FOREVER
export function buildPriceHistory(data) {
  const timeline = {};

  data.forEach((row) => {
    const store = row.Store;
    const item = row.MenuItem;
    const date = row.OrderDate;
    const price = Number(row.UnitPrice);

    if (!store || !item || !date || isNaN(price)) return;

    timeline[store] ??= {};
    timeline[store][item] ??= {};
    timeline[store][item][date] ??= { sum: 0, count: 0 };

    timeline[store][item][date].sum += price;
    timeline[store][item][date].count += 1;
  });

  const result = Object.entries(timeline)
    // Sort stores alphabetically
    .sort(([storeA], [storeB]) => storeA.localeCompare(storeB))
    .map(([store, items]) => ({
      store,
      prices: Object.entries(items)
        // Sort items alphabetically
        .sort(([itemA], [itemB]) => itemA.localeCompare(itemB))
        .map(([item, dates]) => ({
          item,
          history: Object.entries(dates)
            .map(([date, { sum, count }]) => ({
              date,
              avgPrice: +(sum / count).toFixed(2),
            }))
            // Sort dates chronologically
            .sort((a, b) => new Date(a.date) - new Date(b.date)),
        })),
    }));

  return result;
}
