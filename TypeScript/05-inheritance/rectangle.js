"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
