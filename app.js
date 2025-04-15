// {
//   function myFirst() {
//     console.log("My Fuction");
//   }

//   function mySecond() {
//     console.log("My Second");
//   }

//   myFirst();
//   mySecond();
// }

// {
//   function myFirst() {
//     console.log("My Fisrt");
//   }

//   function mySecond() {
//     console.log("My Second");
//   }

//   mySecond();
//   myFirst();
// }

// {
//   function display(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

//   let result = myCalculator(5, 5);
//   display(result);
// }

// {
//   function display(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     display(sum);
//   }

//   let result = myCalculator(10, 5);
//   // display(result);
// }

// {
//   function display(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function myCalculator(num1, num2, callback) {
//     let sum = num1 + num2;
//     callback(sum);
//   }

//   myCalculator(10, 20, display);
//   // display(result);
// }

// {
//   {
//     function myCalculator(num1, num2, callback) {
//       let sum = num1 + num2;
//       callback(sum);
//     }

//     myCalculator(10, 40, (some) => {
//       document.getElementById("demo").innerHTML = some;
//     });
//     // display(result);
//   }
// }

// {
//   function hello() {
//     console.log("Line 2 Code");
//   }
//   console.log("Line 1 Code");
//   // hello();
//   console.log("Line 3 Code");
// }

// {
//   console.log("Line 1 Code");
//   setTimeout(function () {
//     console.log("Line 2 Code");
//   }, 2000);
//   console.log("Line 3 Code");
// }

// {
//   console.log("Code 1 Line");
//   setTimeout(() => {
//     console.log("Code 2 Line");
//   }, 2000);
//   console.log("Code 3 Line");
// }

// callback

// const peymentSuccess = true;
// const marks = 70;

// function enroll(callback) {
//   console.log("Course enrollment is in Progress.");

//   setTimeout(() => {
//     if (peymentSuccess) {
//       callback();
//     } else {
//       console.log("Payment failed");
//     }
//   }, 2000);
// }

// function progress(callback) {
//   console.log("Course on progress ...");
//   setTimeout(function () {
//     if (marks >= 80) {
//       callback();
//     } else {
//       console.log("You could not get enough marks to get the Certificate");
//     }
//   }, 300);
// }

// function getCertificate() {
//   console.log("Preparing Your Certificate..");
//   setTimeout(function () {
//     console.log("Congrats, You got the certificate");
//   }, 1000);
// }

// enroll(() => progress(getCertificate));

// const paymet = true;
// const marks = 90;

// function enroll(progress) {
//   console.log("Your Course Enroll in Progress ..");
//   setTimeout(() => {
//     if (paymet) {
//       progress();
//     } else {
//       console.log("Your Payment Failed");
//     }
//   }, 2000);
// }

// function progress(getCertificate) {
//   console.log("Your Course Progress on Going");

//   setTimeout(() => {
//     if (marks >= 80) {
//       getCertificate();
//     } else {
//       console.log("You can't got Enough Marks");
//     }
//   }, 5000);
// }

// function getCertificate() {
//   console.log("Your Certificate Peparing");

//   setTimeout(() => {
//     console.log("Congrats, You Got Certificate");
//   }, 3000);
// }

// enroll(function () {
//   progress(getCertificate);
// });

// Promise :

// const status = false;

// console.log("Task 1");
// const promise = new Promise((resolve, rejcet) => {
//   setTimeout(function () {
//     if (status) {
//       resolve("Task 2");
//     } else {
//       rejcet("Faild");
//     }
//   }, 3000);
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// console.log("Task 3");

// =================================
// const payment = true;
// const marks = 60;

// function enroll() {
//   console.log("Course Enrollment Progress");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (payment) {
//         resolve();
//       } else {
//         reject("Payment Faild");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function progress() {
//   console.log("Course Progress on Going");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (marks >= 80) {
//         resolve();
//       } else {
//         reject("You Could not get Enough Marks");
//       }
//     }, 3000);
//   });
//   return promise;
// }

// function getCertificate() {
//   console.log("Your Certificate Preparing ...");

//   const promise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Congrats , You Got Certificate");
//     }, 2000);
//   });

//   return promise;
// }
// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// //   var keyword
// // you can redeclare and re-assign
// var number; // variable declare but not assign
// console.log(number); //  undifined
// number = 20; //  number variabel assign
// console.log(number); // 20

// // let keyword

// async await

const peymentSuccess = true;
const marks = 90;

function enroll() {
  console.log("Course enroll on progress ...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (peymentSuccess) {
        resolve();
      } else {
        reject("You Peyment Faild");
      }
    }, 5000);
  });
  return promise;
}

function progress() {
  console.log("Course Progress on Going");
  const promise = new Promise(function (resolve, rejcet) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        rejcet("You Could Not Enough Marks");
      }
    }, 2000);
  });
  return promise;
}

function getCertificate() {
  const promise = new Promise(function (resolve) {
    console.log("Your Course Preparing");
    setTimeout(() => {
      resolve("Congrats, You Got Cetificate");
    }, 3000);
  });
  return promise;
}

async function course() {
  await enroll();
  await progress();
  const result = await getCertificate();
  console.log(result);
}

course();
