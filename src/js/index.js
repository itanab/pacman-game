document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const stage = new Stage(10, 10);
  stage.mount(container);

  const jayne = new Pacman(0, 3, stage);
  jayne.mount(stage.element);


  const apple = new Entity(0, 4, 'apple');
  apple.mount(stage);

  const wall = new Entity(5, 8, 'wall');
  wall.mount(stage);

  const bomb = new Entity(8, 9, 'bomb');
  bomb.mount(stage);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      jayne.move('right');
      jayne.update();
    } else if (event.code === 'ArrowLeft') {
      jayne.move('left');
      jayne.update();
    } else if (event.code === 'ArrowUp') {
      jayne.move('up');
      jayne.update();
    } else if (event.code === 'ArrowDown') {
      jayne.move('down');
      jayne.update();
    }
  });
});
