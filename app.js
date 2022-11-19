// navabar
var hover=document.querySelectorAll(".nav-link");
hover.forEach(h=>{

   h.addEventListener('click',function(){
      hover.forEach(f=>{
         f.classList.remove("nav-act");
      })
      h.classList.add("nav-act");
   })
})

// Searching
let searchBox = document.querySelector('#search-box');
let boxs = document.querySelectorAll('.hotels .boxs .box');
let all=document.querySelector("#all");
searchBox.oninput = () =>{
   boxs.forEach(hide => hide.style.display = 'none');
   let value =  searchBox.value.toLowerCase();
 
   boxs.forEach(filter =>{
      let title = filter.getAttribute('data-title');
      if(value == title){
         filter.style.display = 'block';
      }
      if(searchBox.value.trim()==''||searchBox.value=="All" ){
         filter.style.display = 'block';
      }

   });
};

// main

var del=document.querySelector('.cl');
var main=document.querySelector('.main');
var plus=document.querySelectorAll('.fa-plus');
var loc=document.querySelectorAll('.fa-location-dot');
var box=document.querySelectorAll(".box");
var im=document.querySelector('.boxx .image img');
var one=document.querySelector('.main .info .text h2 .one');
var star=document.querySelector('.stars');
var loc=document.querySelector('.main .boxx .info  h4 iframe');
var two=document.querySelector('.main .info .text h2 .two');
var desc=document.querySelector('.main .info .text p span');


box
box.forEach(b=>{
   b.children[1].children[0].children[1].addEventListener('click',function(){

        main.style.display='block';
       im.src= b.children[0].src;
       one.innerHTML=b.children[1].children[0].children[0].innerHTML;
       star.innerHTML=b.children[1].children[1].children[2].innerHTML;
       two.innerHTML=b.children[1].children[1].children[0].innerHTML;
       loc.src=b.children[1].children[1].children[4].src;
desc.innerHTML=b.children[1].children[1].children[1].innerHTML;
    });
})
del.addEventListener('click',function(){
    main.style.display='none';
})




// Questions
var alldiv=document.querySelectorAll(".question .alldiv .q1");

alldiv.forEach(q=>{


   q.addEventListener('click',function(){

      q.classList.toggle('active');

   });

});


// service

var copeimg=document.querySelector(".imgg");


var service=document.querySelectorAll(".ourser");


service.forEach(ser=>{


   ser.addEventListener('click',function(){
     service.forEach(d=>{
      d.classList.remove('activeService');
     })
      copeimg.src=ser.getAttribute('data-src');
      ser.classList.add("activeService");
   });
});

























