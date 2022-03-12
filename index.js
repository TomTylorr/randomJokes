const btnWrapper = document.querySelector('.btn-wrapper'),
      btn = document.querySelector('.btn'),
      btnContent = document.querySelector('.btn__content'),
      quotes = document.querySelector('.quotes'),
      main = document.querySelector('.main'),
      quotes2 = document.querySelector('.quotes2'),
      language = document.querySelector('.language'),
      btnLanguageEn = document.querySelector('.btn-language-en'),
      btnLanguageRu = document.querySelector('.btn-language-ru'),
      languages = document.querySelectorAll('.btn-language');

let innerText = "";

btnWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') || e.target.classList.contains('btn__content') ||
    e.target.classList.contains('btn__glitch') ) {
        btn.classList.toggle('btn--secondary');
        if (btnLanguageEn.classList.contains('language-active')) {
            console.log("english")
            getDataEn();
        }
    
        if (btnLanguageRu.classList.contains('language-active')) {
            console.log("russian")
            getQuotes();
        }
        if (btnContent.textContent == "Давай цитату!") {
            btnContent.textContent = "Еще давай!";
            main.style.backgroundImage = "url(./assets/img/main2.jpg)";
        } else {
            btnContent.textContent = "Давай цитату!";
            main.style.backgroundImage = "url(./assets/img/main.jpg)";
        }
    }

})

const urlEn = 'http://api.icndb.com/jokes/random/1/';

async function getDataEn() {
    const res = await fetch(urlEn);
    const data = await res.json();
    innerText = data.value[0].joke;
    quotes.textContent = innerText;
    return innerText;
}

getDataEn();

async function getQuotes() {
    const quotesInner = 'quotes.json';
    const res = await fetch(quotesInner);
    const data = await res.json();
    let quote = data[Math.floor(Math.random()*data.length)];
    innerText = quote.text + " - " + quote.author;
    quotes.textContent = innerText;
    return innerText;
}

function changeClassActive(className, e) {
    languages.forEach(language => {
        language.classList.remove(className)
    })
    e.target.classList.add(className)
}

language.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-language-en')) {
        console.log("english")
        getDataEn();
    }

    if (e.target.classList.contains('btn-language-ru')) {
        console.log("russian")
        getQuotes();
    }   
    changeClassActive('language-active', e);
})

