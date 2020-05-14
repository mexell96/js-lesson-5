let divEl = document.createElement('div');
divEl.id = 'container';
document.body.appendChild(divEl);

let tableEl = document.createElement('table');
tableEl.id = 'table';

divEl.insertAdjacentElement('afterbegin', tableEl);

let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

tableEl.insertAdjacentElement('afterbegin', thead);

tableEl.insertAdjacentElement('afterbegin', tbody);

//

let title = [
    {id: 'ID',
    name: 'NAME',
    age: 'AGE',
    grades: 'GRADES',
},
];


var containerMain = document.getElementById("table").getElementsByTagName("thead")[0];

title.forEach(title => {
var tr = document.createElement("tr");


var idColumn = document.createElement('td');
idColumn.innerHTML = title.id;


var nameColumn = document.createElement('td');
nameColumn.innerHTML = title.name;


var ageColumn = document.createElement('td');
ageColumn.innerHTML = title.age;

var gradesColumn = document.createElement('td');
gradesColumn.innerHTML = title.grades;


tr.appendChild(idColumn);
tr.appendChild(nameColumn);
tr.appendChild(ageColumn);
tr.appendChild(gradesColumn);

containerMain.appendChild(tr);
});


//


let peoples = [
    {id: 1,
    name: 'Igor',
    age: 20,
    grades: [2, 3, 4, 5, 2],
},
    {id: 2,
    name: 'Maksim',
    age: 25,
    grades: [2, 1, 5, 5, 5],
}];


var container = document.getElementById("table").getElementsByTagName("tbody")[0];

peoples.forEach(people => {
var tr = document.createElement("tr");


var idColumn = document.createElement('td');
idColumn.innerHTML = people.id;


var nameColumn = document.createElement('td');
nameColumn.innerHTML = people.name;


var ageColumn = document.createElement('td');
ageColumn.innerHTML = people.age;

var gradesColumn = document.createElement('td');
gradesColumn.innerHTML = people.grades;


tr.appendChild(idColumn);
tr.appendChild(nameColumn);
tr.appendChild(ageColumn);
tr.appendChild(gradesColumn);

container.appendChild(tr);
});