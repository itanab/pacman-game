const jayne = new Pacman(425, 425);

const update = () => {
  const pacman = document.querySelector('.entity');

  pacman.style.left = `${jayne.xpos}px`;
  pacman.style.top = `${jayne.ypos}px`;


  if (jayne.mouth) {
    pacman.style.backgroundPositionX = '0px';
  } else {
    pacman.style.backgroundPositionX = '85px';
  }

  if (jayne.dir === 'left') {
    pacman.style.backgroundPositionY = '255px';
  } else if (jayne.dir === 'up') {
    pacman.style.backgroundPositionY = '85px';
  } else if (jayne.dir === 'down') {
    pacman.style.backgroundPositionY = '170px';
  } else if (jayne.dir === 'right') {
    pacman.style.backgroundPositionY = '0px';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  update();

  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      jayne.move('right');
      update();
    } else if (event.code === 'ArrowLeft') {
      jayne.move('left');
      update();
    } else if (event.code === 'ArrowUp') {
      jayne.move('up');
      update();
    } else if (event.code === 'ArrowDown') {
      jayne.move('down');
      update();
    }
  });
});
