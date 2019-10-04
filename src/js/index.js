let xpos=0;
let opened=true;

document.addEventListener('DOMContentLoaded', () => {
 
  document.addEventListener('keydown', (event)=>{
    const pacman = document.querySelector('.entity');
    
    if(event.code === 'ArrowRight'){
    
      if (opened){
         pacman.style.backgroundPositionX="0px";
         opened=false;
      }else{
        pacman.style.backgroundPositionX="85px";
        opened=true;
      }
      xpos+=85;
      pacman.style.left=`${xpos}px`;   
    }
    
  });
});
