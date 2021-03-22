'use strict';
let total1 =0;
let total2 =0;
let total3 =0;
let total4 =0;
let total5 =0;
let houres=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const Seattle={
    name : 'Seattle',
    coustmerPerHour : 0 ,
    getCoustmer: function(min,max){
        console.log(this);
        this.coustmerPerHour = getRandomNumber(min,max);
        console.log(this);
},
render:function () {
    const container = document.getElementById('store place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< houres.length; i++)
    {
        Seattle.getCoustmer(23,65);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${houres[i]}: ${this.coustmerPerHour} cookies`;
     total1=total1+this.coustmerPerHour;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =`Total : ${total1} cookies`;
}};
Seattle.render();


const Tokyo={
    name : 'Tokyo',
    coustmerPerHour : 0 ,
    getCoustmer: function(min,max){
        console.log(this);
        this.coustmerPerHour = getRandomNumber(min,max);
        console.log(this);
},
render:function () {
    const container = document.getElementById('store place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< houres.length; i++)
    {
        Tokyo.getCoustmer(3,24);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${houres[i]}: ${this.coustmerPerHour} cookies`;
      total2=total2+this.coustmerPerHour;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =`Total : ${total2} cookies`;
}};
Tokyo.render();

const Dubai={
    name : 'Dubai',
    coustmerPerHour : 0 ,
    getCoustmer: function(min,max){
        console.log(this);
        this.coustmerPerHour = getRandomNumber(min,max);
        console.log(this);
},
render:function () {
    const container = document.getElementById('store place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< houres.length; i++)
    {
        Dubai.getCoustmer(11,38);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${houres[i]}: ${this.coustmerPerHour} cookies`;
      total3=total3+this.coustmerPerHour;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =`Total : ${total3} cookies`;
}};
Dubai.render();

const Paris={
    name : 'Paris',
    coustmerPerHour : 0 ,
    getCoustmer: function(min,max){
        console.log(this);
        this.coustmerPerHour = getRandomNumber(min,max);
        console.log(this);
},
render:function () {
    const container = document.getElementById('store place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< houres.length; i++)
    {
        Paris.getCoustmer(20,38);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${houres[i]}: ${this.coustmerPerHour} cookies`;
      total4=total4+this.coustmerPerHour;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =`Total : ${total4} cookies`;
}};
Paris.render();

const Lima={
    name : 'Lima',
    coustmerPerHour : 0 ,
    getCoustmer: function(min,max){
        console.log(this);
        this.coustmerPerHour = getRandomNumber(min,max);
        console.log(this);
},
render:function () {
    const container = document.getElementById('store place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< houres.length; i++)
    {
        Lima.getCoustmer(2,16);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${houres[i]}: ${this.coustmerPerHour} cookies`;
      total5=total5+this.coustmerPerHour;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent =`Total : ${total5} cookies`;
}};
Lima.render();


function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);}