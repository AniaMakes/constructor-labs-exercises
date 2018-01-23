// task: write a function that takes a list of name and outputs random pairs
// once the above is completed, make it so that the console logs pairs one by one, with some delay between each console logs
// 23-Jan-2018 @AniaMakes & @Foxbasset

function pairUs(array) {
  var output = [];

  while (array.length > 1) {
    array = shuffle(array);
    var person1 = array.pop();
    var person2 = array.shift();
    var pair = [person1, person2];
    output.push(pair);
  }

  if (array.length == 1) {
    var single = `Lonely person: ${array[0]}`;
    output.push(single);
  }

  return output;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var cohort = [
  'Alison',
  'Katia',
  'Alex',
  'Ania',
  'Debra',
  'Anisa',
  'Mathilde',
  'Alastair',
  'Cosky',
  'Scot',
  'Benny',
];

var iteratingInt = 0;
var pairsList = pairUs(cohort); // returns an array

function printWithDelay() {
  setTimeout(function() {
    console.log(pairsList[iteratingInt]);
    iteratingInt++;
    if (iteratingInt < pairsList.length) {
      printWithDelay();
    }
  }, 1000);
}

printWithDelay();
