interface ShapePrototype {
    clone(): ShapePrototype;
}

class Circle implements ShapePrototype {
    public color: string;
    public radius: number;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }

    clone(): Circle {
        return new Circle(this.color, this.radius);
    }

    display(): void {
        console.log(`Circle\nColor: ${this.color}, Radius: ${this.radius}`);
    }
}

class Rectangle implements ShapePrototype {
    public width: number;
    public length: number;
    
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
    
    clone(): Rectangle {
        return new Rectangle(this.width, this.length);
    }
    
    display(): void {
        console.log(`Rectangle\nWidth: ${this.width}, Length: ${this.length}`);
    }      
}

const shape1 = new Circle("Blue", 20);
const shape2 = new Rectangle(20, 3);
shape1.display()
shape2.display()

// Test Cloning
const origCircle = new Circle("Yellow", 8);
const clonedCircle = origCircle.clone() as Circle;
clonedCircle.color = "Pink";
clonedCircle.radius = 11;

console.log(`Circle\nColor: ${origCircle.color} -> ${clonedCircle.color}`)
console.log(`Circle\nRadius: ${origCircle.radius} -> ${clonedCircle.radius}`)  

const origRectangle = new Rectangle(9, 3);
const clonedRectangle = origRectangle.clone() as Rectangle;
clonedRectangle.width = 10;
clonedRectangle.length = 6

console.log(`Rectangle\nWidth: ${origRectangle.width} -> ${clonedRectangle.width}`)  
console.log(`Rectanglel\nLength: ${origRectangle.length} -> ${clonedRectangle.length}`)  






