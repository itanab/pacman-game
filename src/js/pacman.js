
class Pacman {
  constructor(xpos, ypos, stage) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = true;
    this.stage = stage;
    this.dir = 'right';
  }

  move(direction) {
    this.dir = direction;
    switch (direction) {
      case 'right':
        if (this.stage.withinBorders(this.xpos + 1, this.ypos) && this.stage.collisionDetection(this.xpos + 1, this.ypos) !== 'wall') {
          this.xpos += 1;
          this.mouth = !this.mouth;
        } else {
          this.mouth = !this.mouth;
        }
        break;
      case 'left':
        if (this.stage.withinBorders(this.xpos - 1, this.ypos) && this.stage.collisionDetection(this.xpos - 1, this.ypos) !== 'wall') {
          this.xpos -= 1;
          this.mouth = !this.mouth;
        } else {
          this.mouth = !this.mouth;
        }
        break;
      case 'up':
        if (this.stage.withinBorders(this.xpos, this.ypos - 1) && this.stage.collisionDetection(this.xpos, this.ypos - 1) !== 'wall') {
          this.ypos -= 1;
          this.mouth = !this.mouth;
        } else {
          this.mouth = !this.mouth;
        }
        break;
      case 'down':
        if (this.stage.withinBorders(this.xpos, this.ypos + 1) && this.stage.collisionDetection(this.xpos, this.ypos + 1) !== 'wall') {
          this.ypos += 1;
          this.mouth = !this.mouth;
        } else {
          this.mouth = !this.mouth;
        }

        break;

      default:
    }
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'pacman';
    this.element.innerHTML = (
      '<div class="entity entity--pac pacgirl-active-light">Jayne</div>'
    );
    this.update();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const pacman = this.element.querySelector('.entity--pac');

    pacman.style.left = `${this.xpos * 85}px`;
    pacman.style.top = `${this.ypos * 85}px`;


    if (this.mouth) {
      pacman.style.backgroundPositionX = '0px';
    } else {
      pacman.style.backgroundPositionX = '85px';
    }

    if (this.dir === 'left') {
      pacman.style.backgroundPositionY = '255px';
    } else if (this.dir === 'up') {
      pacman.style.backgroundPositionY = '85px';
    } else if (this.dir === 'down') {
      pacman.style.backgroundPositionY = '170px';
    } else if (this.dir === 'right') {
      pacman.style.backgroundPositionY = '0px';
    }
  }
}
