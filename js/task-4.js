// Стрілочна функція для підрахунку загального балансу за статтю
const getTotalBalanceByGender = (users, gender) => {
  // Використання ланцюжка методів для отримання суми
  return users
    .filter((user) => user.gender === gender) // Отримання користувачів заданої статі
    .reduce((acc, user) => acc + user.balance, 0); // Сума балансів
};

// Приклади використання
const clients = [
  { name: "Moore Hensley", gender: "male", balance: 2811 },
  { name: "Sharlene Bush", gender: "female", balance: 3821 },
  { name: "Ross Vazquez", gender: "male", balance: 3793 },
  { name: "Elma Head", gender: "female", balance: 2278 },
  { name: "Carey Barr", gender: "male", balance: 3951 },
  { name: "Blackburn Dotson", gender: "male", balance: 1498 },
  { name: "Sheree Anthony", gender: "female", balance: 2764 },
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053
console.log(getTotalBalanceByGender(clients, "female")); // 8863
