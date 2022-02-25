"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myShape = new shape_1.Shape(10, 15);
let myCircle = new circle_1.Circle(5, 10, 20);
let myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes
let theShapes = [];
// add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
