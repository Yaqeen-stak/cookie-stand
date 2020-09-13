"use strict"
var seattle={
    locationName:'Seattle',
    max:65,
    min:23,
    customerPerHoure:0,
    averageHourlyCustomers:6.5,
    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure(){
        this.customerPerHoure=this.getRandomNumber(this.min,this.max);
    },
  getRandomNumber:function (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min + 1) + min);
   },
   cookiesPurchased:function (first){
  var cookiesPurchasedPerHoure =this.customerPerHoure*this.averageHourlyCustomers;
  return [cookiesPurchasedPerHoure];
},

render: function () {
    var container = document.getElementById('Shop 1');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var i=0;i<this.houres.length;i++){
    this.cookiesPurchased();
    this.getRandomNumber();
    this.getCustomerPerHoure();
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=this.houres[i] +' '+this.cookiesPurchased(); +' ' + "Cookies" 
}
},
};

seattle.getCustomerPerHoure(23, 65);
seattle . render();
console.table(seattle);



var tokyo={
    locationName:'Tokyo',
    max:24,
    min:3,
    customerPerHoure1:0,
    averageHourlyCustomers1:1.2,
    houres1:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure1(){
        this.customerPerHoure1=this.getRandomNumber1(this.min,this.max);
    },
  getRandomNumber1:function (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min + 1) + min);
   },
   cookiesPurchased1:function (first){
  var cookiesPurchasedPerHoure1 =this.customerPerHoure1*this.averageHourlyCustomers1;
  return [cookiesPurchasedPerHoure1];
},

render1: function () {
    var container = document.getElementById('Shop 2');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var j=0;j<this.houres1.length;j++){
    this.cookiesPurchased1();
    this.getRandomNumber1();
    this.getCustomerPerHoure1();
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=this.houres1[j] +' '+this.cookiesPurchased1(); +' ' + "Cookies" 
}
},
};

tokyo.getCustomerPerHoure1(3, 24);
tokyo . render1();
console.table(tokyo);



var dubai={
    locationName:'Dubai',
    max:38,
    min:11,
    customerPerHoure1:0,
    averageHourlyCustomers1:3.7,
    houres1:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure1(){
        this.customerPerHoure1=this.getRandomNumber1(this.min,this.max);
    },
  getRandomNumber1:function (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min + 1) + min);
   },
   cookiesPurchased1:function (first){
  var cookiesPurchasedPerHoure1 =this.customerPerHoure1*this.averageHourlyCustomers1;
  return [cookiesPurchasedPerHoure1];
},

render1: function () {
    var container = document.getElementById('Shop 3');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var j=0;j<this.houres1.length;j++){
    this.cookiesPurchased1();
    this.getRandomNumber1();
    this.getCustomerPerHoure1();
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=this.houres1[j] +' '+this.cookiesPurchased1(); +' ' + "Cookies" 
}
},
};

dubai.getCustomerPerHoure1(11, 38);
dubai . render1();
console.table(dubai);




var paris={
    locationName:'Paris',
    max:38,
    min:20,
    customerPerHoure1:0,
    averageHourlyCustomers1:2.3,
    houres1:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure1(){
        this.customerPerHoure1=this.getRandomNumber1(this.min,this.max);
    },
  getRandomNumber1:function (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min + 1) + min);
   },
   cookiesPurchased1:function (first){
  var cookiesPurchasedPerHoure1 =this.customerPerHoure1*this.averageHourlyCustomers1;
  return [cookiesPurchasedPerHoure1];
},

render1: function () {
    var container = document.getElementById('Shop 4');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var j=0;j<this.houres1.length;j++){
    this.cookiesPurchased1();
    this.getRandomNumber1();
    this.getCustomerPerHoure1();
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=this.houres1[j] +' '+this.cookiesPurchased1(); +' ' + "Cookies" 
}
},
};

paris.getCustomerPerHoure1(20, 38);
paris . render1();
console.table(paris);




var lima={
    locationName:'Lima',
    max:16,
    min:2,
    customerPerHoure1:0,
    averageHourlyCustomers1:4.6,
    houres1:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure1(){
        this.customerPerHoure1=this.getRandomNumber1(this.min,this.max);
    },
  getRandomNumber1:function (min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max- min + 1) + min);
   },
   cookiesPurchased1:function (first){
  var cookiesPurchasedPerHoure1 =this.customerPerHoure1*this.averageHourlyCustomers1;
  return [cookiesPurchasedPerHoure1];
},

render1: function () {
    var container = document.getElementById('Shop 5');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var j=0;j<this.houres1.length;j++){
    this.cookiesPurchased1();
    this.getRandomNumber1();
    this.getCustomerPerHoure1();
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=this.houres1[j] +' '+this.cookiesPurchased1(); +' ' + ["Cookies"] 
}
},
};

lima.getCustomerPerHoure1(2, 16);
lima . render1();
console.table(lima);