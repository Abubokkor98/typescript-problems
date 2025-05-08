function transformText(text: string, makeUpper?: boolean): string {
  if (makeUpper === false) {
    return text.toLowerCase();
  }
  return text.toUpperCase();
}

console.log("Output 1");
console.log(transformText("World"));
console.log(transformText("World", true));
console.log(transformText("World", false));

function filterTopRatedMovies(
  movies: { name: string; score: number }[]
): { name: string; score: number }[] {
  return movies.filter((movie) => movie.score >= 4);
}

const movieList = [
  { name: "Inception", score: 4.8 },
  { name: "Cats", score: 2.1 },
  { name: "Interstellar", score: 5.0 },
  { name: "Avatar", score: 4.3 },
];

console.log("Output 2");
console.log(filterTopRatedMovies(movieList));

function mergeArrays<T>(...groups: T[][]): T[] {
  return groups.reduce((acc, curr) => acc.concat(curr), []);
}

console.log("Output 3");
console.log(mergeArrays(["red", "blue"], ["green"]));
console.log(mergeArrays([100, 200], [300, 400], [500]));

class Transport {
  private brand: string;
  yearMade: number;
  constructor(brand: string, yearMade: number) {
    this.brand = brand;
    this.yearMade = yearMade;
  }

  getDetails() {
    return `Brand: ${this.brand}, Year: ${this.yearMade}`;
  }
}

class Bike extends Transport {
  constructor(brand: string, yearMade: number, private type: string) {
    super(brand, yearMade);
  }

  getType() {
    return `Type: ${this.type}`;
  }
}

console.log("Output 4");
const myBike = new Bike("Yamaha", 2022, "Sport");
console.log(myBike.getDetails());
console.log(myBike.getType());

function evaluateInput(input: string | number): number {
  return typeof input === "string" ? input.length : input * 2;
}

console.log("Output 5");
console.log(evaluateInput("typescript"));
console.log(evaluateInput(15));

interface Item {
  title: string;
  cost: number;
}

function findCostliestItem(items: Item[]): Item | null {
  if (items.length === 0) return null;

  return items.reduce((max, item) => (item.cost > max.cost ? item : max));
}

const shopItems = [
  { title: "Shoes", cost: 1500 },
  { title: "Hat", cost: 800 },
  { title: "Watch", cost: 2500 },
  { title: "Bag", cost: 2200 },
];

console.log("Output 6");
console.log(findCostliestItem(shopItems));

enum WeekDay {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function classifyDay(day: WeekDay): string {
  return day === WeekDay.Sat || day === WeekDay.Sun ? "Weekend" : "Weekday";
}

console.log("Output 7");
console.log(classifyDay(WeekDay.Tue));
console.log(classifyDay(WeekDay.Sun));

async function delayedSquare(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num < 0
        ? reject("Error: Negative number is invalid")
        : resolve(num * num);
    }, 1000);
  });
}

console.log("Output 8");
delayedSquare(6).then(console.log);
delayedSquare(-7).catch(console.error);
