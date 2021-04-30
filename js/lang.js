let select_lng = document.querySelector('#select-lang-list');
let lng = document.getElementById('text-lang');
let lng_mobile = document.getElementById('text-lang-mobile');

const lng_ua = document.querySelector('#lng-ua');
const lng_ru = document.querySelector('#lng-ru');
const lng_en = document.querySelector('#lng-en');

const allLang = ['ua', 'ru', 'en'];

function changeURL_ua()
{
    location.href = window.location.pathname + '#ua';
    lng.innerText  = 'Ua';
    lng_mobile.innerText ='Ua';

    lng_ua.style.display = 'none';
    lng_ru.style.display = 'inline-block';
    lng_en.style.display = 'inline-block';

    change_lang();
}
function changeURL_ru()
{
    location.href = window.location.pathname + '#ru';
    lng.innerText  = 'Ru';
    lng_mobile.inneinnerText ='Ru';

    lng_ua.style.display = 'inline-block';
    lng_ru.style.display = 'none';
    lng_en.style.display = 'inline-block';

    change_lang();
}
function changeURL_en()
{
    location.href = window.location.pathname + '#en';
    lng.innerText  = 'En';
    lng_mobile.innerText ='En';

    lng_ua.style.display = 'inline-block';
    lng_ru.style.display = 'inline-block';
    lng_en.style.display = 'none';

    change_lang();
}

function change_lang()
{
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash))
    {
        location.href = window.location.pathname + '#ru';
    }
    else
    {
        if(hash == "ua")
        {
            lng.innerText  = 'Ua';
            lng_mobile.innerText ='Ua';

            lng_ua.style.display = 'none';
            lng_ru.style.display = 'inline-block';
            lng_en.style.display = 'inline-block';
        }
        if(hash == "ru")
        {
            lng.innerText  = 'Ru';
            lng_mobile.innerText ='Ru';

            lng_ua.style.display = 'inline-block';
            lng_ru.style.display = 'none';
            lng_en.style.display = 'inline-block';
        }
        if(hash == "en")
        {
            lng.innerText  = 'En';
            lng_mobile.innerText ='En';

            lng_ua.style.display = 'inline-block';
            lng_ru.style.display = 'inline-block';
            lng_en.style.display = 'none';
        }
    }

    for (let key in langArr)
    {
        let el = document.querySelectorAll('.lang_' + key);
        if (el)
        {
            for (let elem of el)
            {
                if (langArr[key][hash])
            {
                if(elem.tagName == 'INPUT')
                {
                    elem.placeholder = langArr[key][hash];
                }
                else
                {
                    elem.innerHTML = langArr[key][hash];
                }
            }
            }
        }
    }

    // document.getElementById("lang-search").placeholder=langArr['search'][hash];
}

change_lang();