// // callback

// const takeOrder = (name, callback) => {
//   console.log(`Take order for ${name} `);
//   callback(name);
// };

// const processOrder = (name) => {
//   console.log(`Processing oder for ${name}`);

//   setTimeout(() => {
//     console.log(`cooking completed`);
//     console.log(`order processed for ${name}`);
//     completeOrder(name);
//   }, 3000);
// };

// const completeOrder = (name) => {
//   console.log(`completed order for ${name} `);
// };

// takeOrder("Sonatan", (name) => {
//   processOrder(name, () => {
//     completeOrder(name);
//   });
// });

const takeOrder = (callback) => {
  console.log("take order");
  callback();
};

const processOrder = (callback) => {
  console.log("Process order");
  callback();
};

const completeOrder = () => {
  console.log("Complete Order");
};

takeOrder(function () {
  processOrder(function () {
    completeOrder();
  });
});
// processOrder();
// completeOrder();
