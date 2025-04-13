{
  function myFirst() {
    console.log("My Fuction");
  }

  function mySecond() {
    console.log("My Second");
  }

  myFirst();
  mySecond();
}

{
  function myFirst() {
    console.log("My Fisrt");
  }

  function mySecond() {
    console.log("My Second");
  }

  mySecond();
  myFirst();
}

{
  function display(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }

  let result = myCalculator(5, 5);
  display(result);
}

{
  function display(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    display(sum);
  }

  let result = myCalculator(10, 5);
  // display(result);
}

{
  function display(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
  }

  myCalculator(10, 20, display);
  // display(result);
}

{
  {
    function myCalculator(num1, num2, callback) {
      let sum = num1 + num2;
      callback(sum);
    }

    myCalculator(10, 40, (some) => {
      document.getElementById("demo").innerHTML = some;
    });
    // display(result);
  }
}
