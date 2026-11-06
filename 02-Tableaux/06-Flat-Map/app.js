const tab = [1, 2, 3, 4, 5];
const dbTab = tab.flatMap((num) => [num * 2, num ** 2]);

console.log(dbTab);
