$('.navbar-toggler').on('click',()=>{
  $('.nav-links').toggleClass('nav-collapsedd');
$('.nav-links ul li').fadeOut()
$('.nav-links ul li').addClass('animated-li').fadeIn()

})
$('.nav-links ul li').on('click',function(){
  $(this).addClass("active").siblings().removeClass("active");
})
window.onload=function(){
  // $('.sec h2').fadeIn(500);
  $('.sec h2').css('transform',' translateY(0%)');
  
}

setTimeout(function(){
  $('.sec-one .wrapper .sec-sec').css('top','-88%')  },1500)

/////

/////
function animatedOne(){
  const circleOne = document.querySelector('.circle-one');
  const timeONe = {
    duration:3000,
    
  };
  circleOne.animate({
    transform: 'translate(-200%,-210%)'
      },timeONe);
}
//
function animatedTwo(){
  const timeTwo = {
    duration:3000
  }
  const circleTwo = document.querySelector('.circle-two');
  circleTwo.animate({
    transform: 'translate(240%,-190%)'
  }, timeTwo)
}

window.onload=function(){
  $('.sec h2').css('transform',' translateY(0%)');
function animOne(){ setInterval(animatedOne,9000)};
 function animTwo(){ setInterval(animatedTwo,14000)};

animOne();
animTwo();
}
///
sectioWarapper= document.querySelectorAll('.sec-three .container');
card = document.querySelector('.card');
CardWidth= $(card).css('width');
rightBtn =document.querySelectorAll('#right')
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
  })
})
////sec-three animated
firsC =document.querySelector('.o')
secondC =document.querySelector('.t')
thirdC =document.querySelector('.th')
fourthC =document.querySelector('.fr')
fifthC =document.querySelector('.fi')
sixthC =document.querySelector('.s')

function CAnimated(){
firsC.animate({
transform: 'translate(-2640%,-1160%)'
},2000)
secondC.animate({
transform: 'translate(-1640%,-2080%)'
},3200)
thirdC.animate({
transform:'translate(1190%, 630%)' 
},2000)
fourthC.animate({
transform:'translate(260%, 1550%)'
},3200)
fifthC.animate({
transform: 'translate(2670%, -1119%)'
},2000)
sixthC.animate({
transform: 'translate(830%, -1969%)'
},3200)}

setInterval(CAnimated,4000)

///
console.log(window.pageYOffset)

$(window).on('scroll',()=>{
winScroll = document.body.scrollTop || document.documentElement.scrollTop;
height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
scrolled = (winScroll / height) *100
$('.scroll').css('width',`${scrolled}%`)
})
////
let secti= document.querySelector('.sec-four');
let imgAn = document.querySelector('.sec-four .sec-t')
let sectFive = document.querySelector('.sec-five .section-one');
let secFiveSecTwo =document.querySelector('.sec-five .section-two')

x=secti.offsetTop;
xFive = sectFive.offsetTop
y= secti.offsetHeight;
yFive = sectFive.offsetHeight
wh = window.innerHeight;
wt = window.scrollY
window.onscroll=ScrollA ;

function ScrollA(){
if (window.scrollY>=((x+y)-wh) -350 ){
  imgAn.classList.add('sect-trans')
  $('.div').hide().fadeIn(1000);
  $('.section-d').addClass('secAnim');


}
else{
  imgAn.classList.remove('sect-trans');
  $('.div').hide()
  $('.section-d').removeClass('secAnim');

}
if(sectFive.getBoundingClientRect().top < 300) {
 $('.prim-o').addClass('prim-move');
 $('.sec-five .secondery-o').addClass('prim-move')
}else{
  $('.prim-o').removeClass('prim-move')
}
if(secFiveSecTwo.getBoundingClientRect().top < 150){
  console.log('yes')
  document.querySelector('.sec-five .section-two .div-one').classList.add('one-trans')
  document.querySelector('.sec-five .section-two .div-two').classList.add('two-trans')
  document.querySelector('.sec-five .section-two .div-four').classList.add('four-trans')
  document.querySelector('.sec-five .section-two .div-five').classList.add('five-trans');
  $('.sec-five .section-two .div-three').fadeIn(2000).css('display','flex');
}else{
  document.querySelector('.sec-five .section-two .div-one').classList.remove('one-trans')
  document.querySelector('.sec-five .section-two .div-two').classList.remove('two-trans')
  document.querySelector('.sec-five .section-two .div-four').classList.remove('four-trans')
  document.querySelector('.sec-five .section-two .div-five').classList.remove('five-trans');
  $('.sec-five .section-two .div-three').hide(200)
}
}




