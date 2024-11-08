{
  const sentence =
    "I love typescript  typescript typescript typescript   typescript";
  const word = "typescript";

  function countWordOccurrences(param1: string, param2: string): number {
    const newArray = param1.split(" ");
    const count = newArray.filter((item) => item === param2).length;
    return count;
  }

  const result = countWordOccurrences(sentence, word);
}
