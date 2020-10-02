document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});
/*console.log('hello world')
document.querySelector('.menu-btn').addEventListener('click',()=>{
    console.log('click!!!!')*/

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:700});
ScrollReveal().reveal('.cards-banner-two',{delay:700});    
