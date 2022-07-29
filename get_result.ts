export function mysteryBox(callExpression) {
  console.log(callExpression);
  console.log(callExpression.arguments);

  // get arguments
  const [countNode] = callExpression.arguments;
  console.log({ countNode });

  const countString: string = countNode.get();
  console.log({ countString });

  const count: number = parseInt(countString, 10);
  console.log({ count });

  // validate
  if (!(count >= 1 && count <= 1000))
    return new Error(
      `Argument ${countString} is expected to be between 1 and 1000`
    );

  // return a value
  return (Math.random() * count) | 0;
}
