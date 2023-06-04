/*const menu = document.getElementById('menu');
const close = document.getElementById('close').innerText='help me';
const nav = document.getElementById('navbar'); 

console.log(close);
if(menu){menu.addEventListener('click',()=>{

  // nav.classList.add('active');
})}
if(close){close.addEventListener('click',()=>{
    alert('welcome');
   // nav.classList.remove('active');
 })}

 const close = document.getElementById('close').innerText='help me';
 alert( close);
  */
 const boxes = document.querySelectorAll('.gallary');
 window.addEventListener('scroll',checkboxes);
 checkboxes()

 function checkboxes(){
  const triggerBottom = window.innerHeight/5*4
  boxes.forEach(box =>{
    const boxTop= box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  })
 }