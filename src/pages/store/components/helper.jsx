export function buildMonthlyRevenue(data) {
  const timeline = {};

  data.forEach((row) => {
    const store = row.Store;
    const date = new Date(row.OrderDate);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const revenue = Number(row.Total);

    if (!store || isNaN(revenue)) return;

    timeline[store] ??= {};
    timeline[store][key] ??= 0;
    timeline[store][key] += revenue;
  });

  return Object.entries(timeline)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([store, months]) => ({
      store,
      history: Object.entries(months)
        .map(([month, total]) => ({
          month,
          revenue: +total.toFixed(2),
        }))
        .sort((a, b) => new Date(a.month + "-01") - new Date(b.month + "-01")),
    }));
}

// I GOT THIS FUNCTION ONLINE MASHALLAH
