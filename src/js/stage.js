class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
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
}
