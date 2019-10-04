class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';

    this.updateStage();
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }

  updateStage() {
    this.element.style.width = `${this.width * 85}px`;
    this.element.style.height = `${this.height * 85}px`;
  }

  withinBorders(x, y) {
    if (x < 0) {
      return false;
    } if (x > this.width - 1) {
      return false;
    } if (y < 0) {
      return false;
    } if (y > this.height - 1) {
      return false;
    }
    return true;
  }

  collisionDetection(x, y) {
    for (const entity of this.entities) {
      if (entity.x === x && entity.y === y) {
        return entity.type;
      }
    }
    return null;
  }
}
