class Pacman {
  constructor(xpos) {
    this.xpos = xpos;
    this.mouth = true;
  }

  moveRight() {
    this.xpos += 85;
    this.mouth = !this.mouth;
  }
}
