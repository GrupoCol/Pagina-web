let count = document.querySelector(".count");
let counter= 600;
setInterval(()=>{
  if(counter< 3500){
    counter++;
    count.innerHTML= counter;
  }else {
    clearInterval(interval)
  }
  console.log('test');
},0.1)