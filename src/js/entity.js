class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'entity';
    this.element.innerHTML = (
      `<div class="entity entity--${this.type}"></div>`
    );


    this.update();
  }

  mount(stage) {
    this.render();
    stage.element.appendChild(this.element);
    stage.entities.push(this);
  }

  update() {
    const entity = this.element.querySelector(`.entity--${this.type}`);

    console.log(entity);
    entity.style.left = `${this.x * 85}px`;
    entity.style.top = `${this.y * 85}px`;
  }
}
