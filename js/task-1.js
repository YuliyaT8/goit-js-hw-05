// Стрілочна функція для отримання імен користувачів
const getUserNames = (users) => {
  // Використання методу map для перетворення масиву користувачів
  return users.map((user) => user.name);
};

// Приклади використання
const users = [
  { name: "Moore Hensley", email: "moorehensley@indexia.com", balance: 2811 },
  { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", balance: 3821 },
  { name: "Ross Vazquez", email: "rossvazquez@xinware.com", balance: 3793 },
  { name: "Elma Head", email: "elmahead@omatom.com", balance: 2278 },
  { name: "Carey Barr", email: "careybarr@nurali.com", balance: 3951 },
  { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", balance: 1498 },
  { name: "Sheree Anthony", email: "shereeanthony@kog.com", balance: 2764 },
];

console.log(getUserNames(users)); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Приклад з випадковими користувачами
const randomUsers = [
  { name: "Jane Doe", email: "janedoe@example.com", balance: 1234 },
  { name: "John Doe", email: "johndoe@example.com", balance: 5678 },
  { name: "Peter Jones", email: "peterjones@example.com", balance: 9012 },
];

console.log(getUserNames(randomUsers)); // ["Jane Doe", "John Doe", "Peter Jones"]