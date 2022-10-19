import { data } from "./users.js";

let listEl = document.getElementById("block");
let sortBtn = document.getElementById('sort')
let selectBtn = document.getElementById('select')
let searchInput = document.getElementById('search__input')
let searcgBtn = document.getElementById('search__btn')

searcgBtn.addEventListener('click', ()=>{
    let arr = []
    data.forEach(i => {
        if(i.text.includes(searchInput.value)) arr.push(i)
    })
    render(listEl, arr)
})

selectBtn.addEventListener('change', (e)=>{
    let filtered = data.filter(el => el.priority == e.target.value)
    render(listEl, filtered)
})

sortBtn.addEventListener('change', () => {
    let sorted = data.sort((a, b) => {
      if(sortBtn.value==='rightly'){
        return a.name.localeCompare(b.name)
      }
      if(sortBtn.value==='reverse'){
        return b.name.localeCompare(a.name)
      }
       
    })
    render(listEl, sorted)
})


function render(list, data) {
  listEl.innerHTML = "";

  data.forEach((el) => {
    let cardEl = document.createElement("div");
    cardEl.className = "card";

    let imgEl = document.createElement("img");
    imgEl.className = "card__img";
    imgEl.src = el.ava;
    imgEl.alt = "card__img";

    let titleEl = document.createElement("h3");
    titleEl.textContent = el.text;
    titleEl.className = "card__title";

    let nameEl = document.createElement("h3");
    nameEl.textContent = el.name;
    nameEl.className = "card__name";

    let dateEl = document.createElement("h3");
    dateEl.textContent = el.time;
    dateEl.className = "card__date";

    let btnEl = document.createElement("button");
    btnEl.textContent = el.priority;
    btnEl.className = "card__btn";
    if (el.priority === 'low') {
      btnEl.style.background = 'yellow'
    }else if (el.priority === 'normal'){
      btnEl.style.background = 'green'
    }

    cardEl.append(imgEl, titleEl, nameEl, dateEl, btnEl);

    list.append(cardEl);
  });
}
render(listEl, data);

