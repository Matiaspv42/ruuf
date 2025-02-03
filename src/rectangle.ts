// Esta es la solución para el ejercicio con el techo rectangular

export function getMaxSmallRectanglesInRectangle({
  largeRectangleWidth,
  largeRectangleHeight,
  smallRectangleWidth,
  smallRectangleHeight
}: {
  largeRectangleWidth: number;
  largeRectangleHeight: number;
  smallRectangleWidth: number;
  smallRectangleHeight: number;
}): number {
  if (smallRectangleHeight <= 0 || smallRectangleWidth <= 0) {
    return 0;
  }
  const numFitWidth1 = Math.floor(largeRectangleWidth / smallRectangleWidth);
  const numFitHeight1 = Math.floor(largeRectangleHeight / smallRectangleHeight);
  const maxRectangles1 = numFitWidth1 * numFitHeight1;

  const numFitWidth2 = Math.floor(largeRectangleWidth / smallRectangleHeight);
  const numFitHeight2 = Math.floor(largeRectangleHeight / smallRectangleWidth);
  const maxRectangles2 = numFitWidth2 * numFitHeight2;

  if (maxRectangles1 > maxRectangles2) {
    return (
      maxRectangles1 +
      countRemainingRectangles({
        largeHeight: largeRectangleHeight,
        largeWidth: largeRectangleWidth,
        smallHeight: smallRectangleHeight,
        smallWidth: smallRectangleWidth
      })
    );
  } else if (maxRectangles2 > maxRectangles1) {
    return (
      maxRectangles2 +
      countRemainingRectangles({
        largeHeight: largeRectangleHeight,
        largeWidth: largeRectangleWidth,
        smallHeight: smallRectangleWidth,
        smallWidth: smallRectangleHeight
      })
    );
  }

  return maxRectangles1;
}

function countRemainingRectangles({
  largeWidth,
  largeHeight,
  smallWidth,
  smallHeight
}: {
  largeWidth: number;
  largeHeight: number;
  smallWidth: number;
  smallHeight: number;
}): number {
  let remainingCount = 0;

  const remainingHeight =
    largeHeight - smallHeight * Math.floor(largeHeight / smallHeight);
  const remainingWidth =
    largeWidth - smallWidth * Math.floor(largeWidth / smallWidth);

  if (remainingHeight > 0) {
    remainingCount += getMaxSmallRectanglesInRectangle({
      largeRectangleWidth: largeWidth,
      largeRectangleHeight: remainingHeight,
      smallRectangleWidth: smallWidth,
      smallRectangleHeight: smallHeight
    });
  }
  if (remainingWidth > 0) {
    remainingCount += getMaxSmallRectanglesInRectangle({
      largeRectangleWidth: remainingWidth,
      largeRectangleHeight: largeHeight,
      smallRectangleWidth: smallWidth,
      smallRectangleHeight: smallHeight
    });
  }

  return remainingCount;
}
