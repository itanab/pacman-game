
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

  render() {
    this.element = document.createElement('div');
    this.element.className = 'container';
    this.element.innerHTML = (
      '<div class="entity entity--pac pacgirl-active-light">Jayne</div>'
    );
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  update() {
    const pacman = this.element.querySelector('.entity');

    pacman.style.left = `${this.xpos}px`;
    pacman.style.top = `${this.ypos}px`;


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
