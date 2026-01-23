// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}
Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};


export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}



export class ProgramWindow{
  constructor(){
    this.screenSize=new Size(800,600);
    this.size=new Size();
    this.position=new Position();
  }

  resize(size){
     let newWidth = Math.min(this.screenSize.width - this.position.x, size.width);
        newWidth = Math.max(newWidth, 1);        
    
        let newHeight = Math.min(this.screenSize.height - this.position.y, size.height);
        newHeight = Math.max(newHeight, 1);
        this.size = new Size(newWidth, newHeight);
  }

   move(newPosition) {
        let newX = Math.min(this.screenSize.width - this.size.width, newPosition.x);
        newX = Math.max(newX, 0);
        let newY = Math.min(this.screenSize.height - this.size.height, newPosition.y);
        newY = Math.max(newY, 0);
    
        this.position = new Position(newX, newY);
    }
}



export function changeWindow(programWindow) {
    let size = new Size(400, 300);
    let position = new Position(100, 150);
    programWindow.resize(size);
    programWindow.move(position);
    return programWindow;
}