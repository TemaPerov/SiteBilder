
let dot = document.querySelectorAll(".td-number");
let b = document.querySelectorAll(".sum");
let row = document.querySelectorAll(".tb-row");
let num = document.querySelectorAll(".num");
let ollSumTable = document.querySelector(".ollSumTable");
let arrowTop = document.querySelector('.arrowTop');
const checkbox = document.querySelectorAll(".checkbox");
const tdCheck = document.querySelectorAll('.td-check')
const burger = document.querySelector('.header__burger')
const nav =  document.querySelector('.header__nav')

dot.forEach((dot, i) => {   
  dot.addEventListener("click", () => { 
    b.forEach((b, f) => {
      num.forEach((num, h) => {
        if (i === f) {
          if (i === h) {
            b.innerHTML = dot.value * num.innerHTML.slice(0,-3)+",00";
          }
        }
      });
    });
  });
  dot.addEventListener("keyup", () => { 
    b.forEach((b, f) => {
      num.forEach((num, h) => {
        if (i === f) {
          if (i === h) {
            b.innerHTML = dot.value * num.innerHTML.slice(0,-3)+",00";
          }
        }
      });
    });
  });
  dot.addEventListener("focus", () => { 
    dot.value = " "
    b.forEach((b, f) => {
      num.forEach((num, h) => {
        if (i === f) {
          if (i === h) {
            b.innerHTML = 0
          }
        }
      });
    });
  });

});


const funck = () => {
    let sum = 0;
    b.forEach((b) => {
      sum += +b.innerHTML.slice(0,-3);
    });
    ollSumTable.innerHTML = sum + ",00"+`<span> грн</span>`;
  };
document.querySelector('.main__table-box').addEventListener('keyup',()=>{
      funck()
})
document.querySelector('.main__table-box').addEventListener('click',()=>{
  funck()
})

const check = document.querySelectorAll('lable')

check.forEach((check, i) => {
    check.addEventListener("click",()=>{
        check.classList.toggle(".active-check")

    }) 
  });

burger.addEventListener("click",()=>{
  navBarOn()
})

const navBarOn = ()=>{
  nav.classList.toggle("active-nav")
  nav.classList.toggle('ative-respons')
  burger.classList.toggle("active")
}
 

arrowTop.addEventListener('click', function(){
  window.scrollTo(pageXOffset, 0);
})
window.addEventListener('scroll',function(){
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    arrowTop.classList.add('arrow__active');
  }else{
    arrowTop.classList.remove('arrow__active');
  }
  })
  
document.querySelector('.activeBtm').addEventListener('click',()=>{
  document.querySelector('.recvize-box').classList.toggle('recv-action')
})
