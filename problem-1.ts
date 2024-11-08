{
  //
  function sumArray(props: number[]): number {
    const returnValue = props.reduce((acc: number, current: number): number => {
      const allSum = acc + current;
      return allSum;
    }, 0);
    return returnValue;
  }
  const result = sumArray([1, 2, 3, 4, 5]);

  //
}
