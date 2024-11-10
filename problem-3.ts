{
  const sentence =
    "I love typescript  typescriPt typescript typescript   typescript";
  const word = "typescripT";

  function countWordOccurrences(param1: string, param2: string): number {
    const newArray = param1.split(" ");
    const count = newArray.filter((item) => item.toLowerCase() === param2.toLowerCase()).length;
    return count;
  }

  const result = countWordOccurrences(sentence, word);
console.log(result)}
