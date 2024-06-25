//3. Write a function that checks if a given number is a prime number .

function primeNumber(num) {
    let i,
      result = true;
    for (i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        result = false;
        break;
      }
    }
    if (result == true) {
      console.log(num + " is prime");
    } else {
      console.log(num + " is not prime");
    }
  };
  
  primeNumber(6);
  primeNumber(11);