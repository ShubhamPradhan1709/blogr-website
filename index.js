const product = document.getElementById('product');

product.addEventListener("click" , function(){
    document.querySelector('.drop-down').classList.toggle('show')
})

const company = document.getElementById('company');
const dropdown = document.querySelector('.drop-downn')
company.addEventListener("click" ,function(){
    
    dropdown.classList.toggle('show')
})

const connect = document.getElementById('connect');
const dropdow = document.querySelector('.drop-dow')

connect.addEventListener('click' , function(){
    dropdow.classList.toggle('show')
})

const three = document.querySelector('.three-line');
const menu = document.querySelector('.menu');
three.addEventListener('click' , function(){
    menu.classList.toggle('active');
})