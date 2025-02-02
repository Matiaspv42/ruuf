import { getMaxSmallRectanglesInRectangle } from './rectangle'
import { getMaxSmallRectanglesInIsoscelesTriangle } from './triangle'


// Ejemplos para la solución del techo rectangular

console.log(
  getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: 2,
    largeRectangleHeight: 4,
    smallRectangleWidth: 1,
    smallRectangleHeight: 2
  })
);
console.log(
  getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: 2,
    largeRectangleHeight: 4,
    smallRectangleWidth: 0,
    smallRectangleHeight: 0
  })
);
console.log(
  getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: 3,
    largeRectangleHeight: 5,
    smallRectangleWidth: 1,
    smallRectangleHeight: 2
  })
);
console.log(
  getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: 1,
    largeRectangleHeight: 10,
    smallRectangleWidth: 2,
    smallRectangleHeight: 2
  })
);
console.log(
  getMaxSmallRectanglesInRectangle({
    largeRectangleWidth: 11,
    largeRectangleHeight: 6,
    smallRectangleWidth: 4,
    smallRectangleHeight: 2
  })
);


// Ejemplo para la solución del techo triangular

console.log(
  getMaxSmallRectanglesInIsoscelesTriangle({
    triangleBase: 20,
    triangleHeight: 10,
    smallRectangleWidth: 1,
    smallRectangleHeight: 2
  })
);
