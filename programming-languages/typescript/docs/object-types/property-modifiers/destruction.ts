
interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}

function printShape({ shape, xPos = 0, yPos = 0}: PaintOptions) {
    console.log("x coordinate at", xPos);
    console.log("y coordinate at", yPos);
}