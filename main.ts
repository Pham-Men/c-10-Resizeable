import {Circle} from "./src/typescript-shape-oop/Circle";
import {Shape} from "./src/typescript-shape-oop/Shape";
import {Rectangle} from "./src/typescript-shape-oop/Rectangle";
import {Square} from "./src/typescript-shape-oop/Square";

let shapes = []

shapes[0] = new Circle("circle", 2);
shapes[1] = new Rectangle(3, 4, "rectangle");
shapes[2] = new Square("square", 2);

shapes.forEach(shape =>
    console.log(shape.resize(2))
);