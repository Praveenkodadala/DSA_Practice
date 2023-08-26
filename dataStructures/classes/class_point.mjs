/**
 * classes with static method
 * we alomost never be using static method in ds but just for idea
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    console.log("dx", dx, "dy", dy);
    return Math.hypot(dx, dy); // d=√((x2 – x1)² + (y2 – y1)²  // hypotenuse
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);

console.log(p1);
console.log(p2);

//console.log(p1.distance(5,5))   // this will not work

console.log(Point.distance(p1, p2));
