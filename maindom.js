/*
1) Напишіть код,  який за допомоги document.getElementById або
document.getElementsByClassName або document.getElementsByTagName :
a) отримує текст з параграфа з id "content"
b) отримує текст з блоку з id "rules"
c) замініть текст параграфа з id 'content' на будь-який інший
d) замініть текст параграфа з id 'rules' на будь-який інший
e) змініть кожному елементу колір фону на червоний
f) змініть кожному елементу колір тексту на синій
g) отримати весь список класів елемента з id=rules і вивести їх в console.log
h) отримати всі елементи з класом fc_rules
i) поміняти колір тексту у всіх елементів fc_rules на червоний*/
/*
let conteinerOne = document.getElementById('content');
console.log(conteinerOne);
let contTwo = document.getElementById('rules');
console.log(contTwo);
conteinerOne.innerText='lorem10' ;
contTwo.innerHTML = 'Mind Is a Prison';
let allDivs = document.getElementsByTagName ('div');
for (let i = 0; i < allDivs.length; i++) {
   allDivs[i].style.backgroundColor = 'red';
   allDivs[i].style.fontSize = ' 30px';
   allDivs[i].style.color= 'blue';
}

let allUl = document.getElementsByTagName ('ul');
for (let i = 0; i < allUl.length; i++) {
    allUl[i].style.backgroundColor = 'red';
    allUl[i].style.fontSize = ' 30px';
    allUl[i].style.color= 'blue';
}
let allP  = document.getElementsByTagName ('p');
for (let i = 0; i < allUl.length; i++) {
    allP[i].style.backgroundColor = 'red';
    allP[i].style.fontSize = ' 30px';
    allP[i].style.color= 'blue';
}*/
/*
2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Вставити цей блок на сторінку
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Блок з адресою зробити окремим блоком, з блоками для кожної властивості*/
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

/*
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
       const div = document.createElement('div');
        div.innerText = `${user.name} ${user.age} ${user.status} `;
        document.body.appendChild(div);
    }
*/
/*
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    let address = '';
    for (const addressOne in user.address){
        address = address + '  ' + user.address[addressOne];
    }
    h2.innerText= user.name;
    pOne.innerText = user.age;
    pTwo.innerText = address;
    div.appendChild(h2);
    div.appendChild(pOne);
    div.appendChild(pTwo);
    document.body.appendChild(div);
}*/
