'use strict';
 let houres=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let places=[];
let cookiesPerHour=[];
function place (name,minPerH,maxPerH,avgPerH){
    this.name=name;
    this.coustmerPerHour=0;
    this.minPerH = minPerH;
    this.maxPerH = maxPerH;
    this.avgPerH = avgPerH;
    this.Total=0;
     this.cookiesPerHour =[];
  places.push (this);
};
place.prototype.gitCustPerHoure=function(max,min,avr){
this.coustmerPerHour=getRandomNumber(min,max,avr);
};
place.prototype.render=function(){
    const td1El = document.createElement('th');
    table2.appendChild(td1El);
    td1El.textContent = this.name;

    for (let i=0;i<houres.length;i++){
        let totalPerHour =0;
        for(let x=0 ;x<places.length;x++)
   places[x].gitCustPerHoure(this.minPerH,this.maxPerH,this.avgPerH);
   const td1El = document.createElement('td');
  table2.appendChild(td1El);
  td1El.textContent = this.coustmerPerHour;
this.Total =this.Total+this.coustmerPerHour;
totalPerHour = totalPerHour + this.coustmerPerHour
cookiesPerHour.push(this.coustmerPerHour)


    }  
    const td2El = document.createElement('td');
    table2.appendChild(td2El);
    td2El.textContent = this.Total;
    const tableDataRow = document.createElement('tr');
    table2.appendChild(tableDataRow);
  
   };
   function addPlace(event){
    event.preventDefault();
    let newName= event.target.country.value;
    let newMin= event.target.min.value;
    let newMax= event.target.max.value;
    let newAvr= event.target.Avrage.value;

    let newPlace = new place(newName,newMin,newMax,newAvr);
    newPlace.render();
};
//    function tableFooter () {
//     const td2El = document.createElement('th');
//     table2.appendChild(td2El);
//     td2El.textContent = 'total';
//     let totalcookies =0;
// for(let i=0;i<cookiesPerHour.length;i++){
    
//     for(let j=0;j<place.length;j++){
//         totalcookies=totalcookies+places[j].cookiesPerHour[i];
//     }
//     // const td3El = document.createElement('th');
//     // table2.appendChild(td3El);
//     // td2El.textContent = totalcookies;
    
//     //console.log(cookiesPerHour);
    
// }
// //console.log(cookiesPerHour.length);
// //console.log(totalcookies);
// }


const seattle = new place('Seattle',23,65,6.3);
const tokyo = new place('Tokyo',3,24,1.2);
const dubai = new place('Dubai',11,38,3.7);
const paris = new place('Paris',20,38,2.3);
const lima = new place('Lima',2,16,4.6);




function getRandomNumber(min,max,avr){

    return Math.floor(Math.random() * (max - min + 1) + min*avr);}
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// tableFooter();
// 

// let clice= document.getElementById('btn');
// clice.addEventListener('click',function(){
//     alert('hi')
// })
let myForm =document.getElementById ('addNewPlace');
myForm.addEventListener('submit',addPlace)


