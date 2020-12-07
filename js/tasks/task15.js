export function task15() {
  const root = document.getElementById('root');

  const a = subtractTheNumber(multiply(addNumbers(2, 3), addNumbers(4, 5)), 10);
  print(a);

  const cat1 = createCat('1', 'Tou', '3', 'blue');
  const cat2 = createCat('1', 'Tyu', '10', 'blue');
  const cat3 = createCat('1', 'Rou', '5', 'blue');

  const cats = [cat1, cat2, cat3];
  print(cats);

  const sortedCats = sortCats(cats);
  const catsWithSymbol = addSymbol(sortedCats, ' <3 <3');

  print(catsWithSymbol);
  print(sortedCats);
}

function addSymbol(cats, symbol) {
  return cats.map((cat) => {
    cat.name += symbol;
    return cat;
  });
}

function sortCats(cats) {
  return [...cats].sort((cat1, cat2) => cat1.age - cat2.age);
}

function addNumbers(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtractTheNumber(a, b) {
  return a - b;
}

function print(a) {
  console.log(a);
}

function createCat(id, name, age, color) {
  const cat = {
    id: id,
    name: name,
    age: age,
    color: color
  };

  return cat;
}