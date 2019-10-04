document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const stage = new Stage(10, 10);
  stage.mount(container);

  const jayne = new Pacman(0, 3, stage);
  jayne.mount(stage.element);


  const wall2 = new Entity(0, 4, 'wall');
  wall2.mount(stage);

  const wall = new Entity(5, 8, 'wall');
  wall.mount(stage);

  const wall3 = new Entity(8, 9, 'wall');
  wall3.mount(stage);

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
