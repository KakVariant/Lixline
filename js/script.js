let burger_btn = document.querySelector('.mobile-burger');
let serch = document.querySelector('.search-mobile');
let lang = document.querySelector('#select-lang-mobile');
let burger_list = document.querySelector('.burger-menu');

function burger_tap()
{
    serch.classList.toggle('burger-on');
    lang.classList.toggle('burger-on');
    burger_list.classList.toggle('menu-on');

    if(serch.classList == 'burger-on')
    {
        burger_btn.style.position = 'absolute';
        burger_btn.style.right = '10px';
        burger_btn.style.top = '40%';
    }
    else
    {
        burger_btn.style.right = '120px';
        burger_btn.style.top = '28%';
    }

    burger_btn.childNodes[1].classList.toggle('line-burger-1');
    burger_btn.childNodes[3].classList.toggle('line-burger-2');
    burger_btn.childNodes[5].classList.toggle('line-burger-3');
}