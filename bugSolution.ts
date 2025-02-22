function greet(person: string | number, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date());
greet(123, new Date());