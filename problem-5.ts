{
  type Person = {
    name: string;
    age: number;
  };
  type key = string;

  function getProperty<T>(prop1: T, prop2: keyof T) {
    return prop1[prop2];
  }

  const person: Person = { name: "Alice", age: 30 };
  const result = getProperty(person, "name");
}
