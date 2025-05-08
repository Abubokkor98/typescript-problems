# Understanding `keyof` and `enum` in TypeScript — Made Simple!

If you're learning TypeScript, you've probably come across some keywords that
seem a little... mysterious at first. Two such handy tools are `keyof` and
`enum`. Don't worry — by the end of this post, you’ll know exactly what they do,
**why they matter**, and how to use them in real projects.

---

## 1. What is the use of the `keyof` in TypeScript?

Imagine you have an object, and you want to work with its keys (like `"name"`,
`"age"`, etc.) TypeScript will help you avoid typos and mistakes.

That’s where `keyof` comes in. It lets you create a new type made up of all the
keys from another type.

### Real-world example:

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
// This becomes: "name" | "age" | "isStudent"
```

Now let’s use it in a function:

```ts
function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const person = { name: "Abu Bokkor", age: 25, isStudent: false };

console.log(getValue(person, "name")); // Output: "Abu Bokkor"
```

### ✅ Why it's cool:

- You get autocomplete suggestions
- TypeScript checks for valid keys
- You avoid errors like `"nmae"` instead of `"name"`

---

## 2. What are `enum`s in TypeScript?

Think of an `enum` as a list of options you define — like directions, user
roles, or status codes. Instead of writing strings or numbers everywhere, you
give them **names** to make your code easier to read and manage.

---

### Numeric Enum Example:

```ts
enum Direction {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

console.log(Direction.North); // Output: 0
```

You can also set the starting value manually:

```ts
enum Status {
  Pending = 1,
  Approved,
  Rejected,
}
```

---

### String Enum Example:

```ts
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(getDayType(Day.Monday)); // Output: Weekday
console.log(getDayType(Day.Sunday)); // Output: Weekend

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function greet(role: Role) {
  if (role === Role.Admin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Hello, user!");
  }
}

greet(Role.User); // Output: Hello, user!
```

### Why it's cool:

- Fewer hard-coded strings and numbers
- Easier to read, write, and maintain
- Great for options like user roles, statuses, etc.

---

## Final Thoughts

Both `keyof` and `enum` may look a little technical at first, but once you
understand their **purpose**, they become super helpful.

- `keyof` lets you work with object keys **safely** and **dynamically**.
- `enum` helps you manage related values **clearly** and **consistently**.

Whether you're building a small web app or a big full-stack project, these tools
make your TypeScript code **stronger, smarter, and more readable**.

---
