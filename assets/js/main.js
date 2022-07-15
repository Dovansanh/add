const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerSearch = $('.header-search')
const input = $('.search')
const navList = $$('.item .item-link')


navList.forEach((item)=>{
    
    item.onclick = function(){
        $('.item .item-link.active').classList.remove('active')
        item.classList.add('active')
    }
})
    
