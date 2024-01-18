"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./src/typescript-shape-oop/Circle");
var Rectangle_1 = require("./src/typescript-shape-oop/Rectangle");
var Square_1 = require("./src/typescript-shape-oop/Square");
var shapes = [];
shapes[0] = new Circle_1.Circle("circle", 2);
shapes[1] = new Rectangle_1.Rectangle(3, 4, "rectangle");
shapes[2] = new Square_1.Square("square", 2);
shapes.forEach(function (shape) {
    return console.log(shape.resize(2));
});
