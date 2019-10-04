class Pacman {
  constructor(xpos, ypos) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = true;
    this.dir = 'right';
  }

  move(direction) {
    this.dir = direction;
    switch (direction) {
      case 'right':
        this.xpos += 85;
        this.mouth = !this.mouth;
        break;
      case 'left':
        this.xpos -= 85;
        this.mouth = !this.mouth;
        break;
      case 'up':
        this.ypos -= 85;
        this.mouth = !this.mouth;
        break;
      case 'down':
        this.ypos += 85;
        this.mouth = !this.mouth;
        break;

      default:
    }
  }
}
