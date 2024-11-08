{
  function removeDuplicates(props: Array<number>): number[] {
    const a: number[] = [];

    const newArray = props.reduce(
      (acc: number[], current: number): number[] => {
        if (a.includes(current) === false) {
          a.push(current);
        }
        return a;
      },
      []
    );

    return a;
  }

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
