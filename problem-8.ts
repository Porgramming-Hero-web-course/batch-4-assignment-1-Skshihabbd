{
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    const objectKey = Object.keys(obj as object);

    const isExist = keys.every((item): boolean => {
      return objectKey.includes(item as string);
    });
    return isExist;
  }

  type Person = { name: string; age: number; email: string; role?: string };

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = validateKeys(person, ["name", "age"]);

  //
}
