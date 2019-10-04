document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const stage = new Stage(6, 10);
  stage.mount(container);

  const jayne = new Pacman(0, 3, stage);
  jayne.mount(stage.element);


  const wall = new Entity(0, 4, 'wall');
  wall.mount(stage);

  const wall1 = new Entity(0, 5, 'wall');
  wall1.mount(stage);

  const wall2 = new Entity(1, 5, 'wall');
  wall2.mount(stage);

  const wall5 = new Entity(1, 6, 'wall');
  wall5.mount(stage);

  const wall6 = new Entity(2, 6, 'wall');
  wall6.mount(stage);

  const wall3 = new Entity(5, 8, 'wall');
  wall3.mount(stage);

  const wall4 = new Entity(5, 9, 'wall');
  wall4.mount(stage);

  const wall7 = new Entity(4, 0, 'wall');
  wall7.mount(stage);

  const apple = new Entity(4, 3, 'apple');
  apple.mount(stage);

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
