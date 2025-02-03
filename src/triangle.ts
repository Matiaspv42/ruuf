// Esta es la solución para el ejercicio con el techo triangular

import { getMaxSmallRectanglesInRectangle } from './rectangle';

export function getMaxSmallRectanglesInIsoscelesTriangle({
  triangleBase,
  triangleHeight,
  smallRectangleWidth,
  smallRectangleHeight
}: {
  triangleBase: number;
  triangleHeight: number;
  smallRectangleWidth: number;
  smallRectangleHeight: number;
}): number {
  if (smallRectangleHeight <= 0 || smallRectangleWidth <= 0) {
    return 0;
  }
  let maxSmallRectangles = 0;
  const rectangleArea = getBiggestRectangleAreaInIsoscelesTriangle(
    triangleBase,
    triangleHeight
  );
  const smallRectangleArea = smallRectangleHeight * smallRectangleWidth;

  if (rectangleArea < smallRectangleArea) {
    return 0;
  }

  const rectangleHeight = rectangleArea / (triangleBase * 0.5);
  const rectangleWidth = triangleBase * 0.5;

  maxSmallRectangles += getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: rectangleWidth,
    largeRectangleHeight: rectangleHeight,
    smallRectangleWidth: smallRectangleWidth,
    smallRectangleHeight: smallRectangleHeight
  });

  // now we do the same with the leftover triangles

  // bottom left corner triangle
  const lefoverTriangle1 = getMaxSmallRectanglesInIsoscelesTriangle({
    triangleBase: (triangleBase - rectangleWidth) / 2,
    triangleHeight: rectangleHeight,
    smallRectangleHeight: smallRectangleHeight,
    smallRectangleWidth: smallRectangleWidth
  });

  // top triangle
  const lefoverTriangle2 = getMaxSmallRectanglesInIsoscelesTriangle({
    triangleBase: rectangleWidth,
    triangleHeight: triangleHeight - rectangleHeight,
    smallRectangleHeight: smallRectangleHeight,
    smallRectangleWidth: smallRectangleWidth
  });

  // since it's an isosceles triangle, bottom left triangle = bottom right triangle
  return maxSmallRectangles + lefoverTriangle1 * 2 + lefoverTriangle2;
}

function getBiggestRectangleAreaInIsoscelesTriangle(
  base: number,
  height: number
): number {
  const triangleArea = base * height * 0.5;
  const rectangleArea = triangleArea * 0.5;

  return rectangleArea;
}
