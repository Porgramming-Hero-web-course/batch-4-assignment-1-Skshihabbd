{
  type Circle = { shape: "circle"; radius: number };
  type Rectangle = { shape: "rectangle"; width: number; height: number };
  function calculateShapeArea(props: Circle | Rectangle): number | void {
    if (props.shape === "circle") {
      const valueOfCircle: number = Math.PI * props.radius * props.radius;
      return valueOfCircle;
    } else if (props.shape === "rectangle") {
      const valueOfRectangle: number = props.width * props.height;
      return valueOfRectangle;
    }
  }
  const circleArea = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
}
