const containers = document.querySelectorAll(".containers span");
const container = document.querySelector(".containers");

let activated = false;

window.addEventListener("scroll", ()=>{
if(
  pageYOffset > container.offsetTOP - container.offsetHeight -200
  && activated== false
){
  container.forEach(container =>{
    container.innerText=0;

    let count =0;

    function updateCount(){
      const target =parseInt(container.dataset.count);
      if(count < target){
        count++;
        console.innerText= count;
        setTimeout(updateCount,10);
      }else{
        container.innerText = target;
      }
    }
    updateCount();
    activated= true;
  });
} else if(
  pageYOffset <= container.offsetTOP - container.offsetHeight -500
  || pageXOffset === 0
  && actividad ===true
 ){
  containers.forEach(container => {
    container.innerText = 0;
  });
  activated =false ; 
 }

}
)