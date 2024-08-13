// create a custom type with the help of type alias
type shape = {
  kind: "circle" | "Rectangle";
  raduis?: number; // only for circle
  // width and hieght is only for rectangle
  width?: number;
  height?: number;
};
// describing circle shape
let circle: shape = {
  kind: "circle",
  raduis: 5,
};
//describing rectangle shape
let Rectangle: shape = {
  kind: "Rectangle",
  width: 15,
  height: 25,
};
console.log(circle);
console.log(Rectangle);
