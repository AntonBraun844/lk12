let myCat = {
    name: "Кофетка",
    age: 3,
    image: "https://funik.ru/wp-content/uploads/2018/10/17478da42271207e1d86.jpg",
favorite: false,
}

let myCat2 = {
    name: "Шоколад",
    favorite: true,
}

const box = document.querySelector(".container");
function creatCard (cat, el=box) {
const card = document.createElement("div");
card.className = "card";
if (!cat.image) {
    card.classList.add("dafault");
} else {
    card.style.backgroundImage = `url(${cat.image})`;
}
const name = document.createElement("h3");
name.innerText = cat.name;
const like = document.createElement("i");
like.className = "fa-heart card_favor";
like.classList.add(cat.favorite?"fa-solid":"card_regular");
card.append (like,name);
if (cat.age>=0) {
    const age = document.createElement("span");
age.innerText = cat.age;
card.append (age);
}
el.append(card);
}

creatCard (myCat);
creatCard (myCat2);
const user = "lk12";
const path = "https://cats.petiteweb.dev/api/single/AntonBraun844/";

fetch (path+"/show")
.then(function(res) {
    console.log(res);
if (res.statusText==="OK") {
    return res.json();
}
})
.then(function(data) {
    console.log(data);
    for (let c of data) {
        createCard(c.box);
    }
})
const ids=[];
fetch(path+"/ids")
.then(res=>.json())
.then(data=>{
    console.log(data);
    ids=[...data];
    myCat.id=ids [ids.length-1]+1;
    addCat(myCat);
})

function addCAt(cat) {
fetch (path + "/add", {
method: "POST",
headers: {
"Content-Type": "application/json"

},
body: JSON.stringify(cat)
})
.then(res=>res.json ())
.then(data=> {
    console.log (data);
})
}

