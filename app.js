let displayMessage = message => {
  console.log(message);
};

setTimeout(() => {
  displayMessage("Hey Ya!");
}, 2000);

displayMessage("Hello World!");

let words = ["First", "Second", "Third", "Fourth"];

let displayWords = words => {
  console.log(words[0]);
  setTimeout(() => {
    console.log(words[1]);
    setTimeout(() => {
      console.log(words[2]);
      setTimeout(() => {
        console.log(words[3]);
      }, 1000);
    }, 2000);
  }, 3000);
};

displayWords(words);

let done = () => {
  console.log("Job Done!");
};

let countdown = (num, callback) => {
  setTimeout(() => {
    if (num > 1) {
      console.log(num);
      countdown(num - 1, callback);
    } else {
      callback();
    }
  }, 1000);
};

countdown(5, done);

let lunchTime = false;

let orderSomefood = () => {
  return new Promise((resolve, reject) => {
    if (lunchTime) {
      let obj = {
        lunch: "Chicken Rara",
        drink: "Chocolate Shake"
      };
      resolve(obj);
    } else {
      let err = new Error("OOF!!! No Lunch Today :(");
      reject(err);
    }
  });
};

orderSomefood().then(
  obj => {
    console.log(obj);
  },
  err => {
    console.log(err);
  }
);
