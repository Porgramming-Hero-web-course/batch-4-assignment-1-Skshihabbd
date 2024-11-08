{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial = {
    age: number;
  };
  function updateProfile(obj: Profile, par: Partial) {
    return { ...obj, ...par };
  }

  const result = updateProfile(
    {
      name: "Alice",
      age: 25,
      email: "alice@example.com",
    },
    { age: 26 }
  );
}
