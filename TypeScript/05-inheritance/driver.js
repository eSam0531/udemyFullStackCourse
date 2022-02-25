"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let myShape = new shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let myRectangle = new rectangle_1.Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
