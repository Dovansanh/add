const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerSearch = $('.header-search')
const input = $('.search')
const navList = $$('.item .item__link')

// menu pc
navList.forEach((item)=>{
    item.onclick = function(){
        $('.item .item__link.active').classList.remove('active')
        item.classList.add('active')
        
    }
    
})
    
// menu tablet

const menu =$('.nav-tablet__icon');
const menuTablet = $('.nav-tablet__menu')
const overMenu = $('.over-menu')
const close = $('.nav-tablet__menu-icon')
const navTabletList = $$('.nav-tablet__item .item__link')

menu.onclick = function(){
    Object.assign(overMenu.style,{
        transform: 'translateY(0)'
        ,
        opacity:' 1'
    })
    Object.assign(menuTablet.style,{
        transform: 'translateX(0)'
        ,
        opacity:' 1'
    })
}
close.onclick = function(){
    menuTablet.style.transform = 'translateX(-100%)'
    Object.assign(menuTablet.style,{
        transform: 'translateX(-100%)'
        ,
        opacity:' 0'
    })
    Object.assign(overMenu.style,{
        transform: 'translateY(-100%)'
        ,
        opacity:' 0'
    })
}
navTabletList.forEach((item)=>{
    item.onclick = function(){
        $('.nav-tablet__item .item__link.active').classList.remove('active')
        item.classList.add('active')
        
    }
    
})
//mobi
const searchMobi = $('.nav-mobi')
const inputMobi =$('.nav-mobi__search')

searchMobi.onclick =()=>{
    inputMobi.classList.toggle('hidden')
}

