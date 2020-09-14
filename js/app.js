"use strict"
var seattle={
    locationName:'Seattle',
    max:65,
    min:23,
    customerPerHoure:[],
    averageHourlyCustomers:6.5,
    cookiesPerHoure:[],
    total:0,

    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure:function(min,max){

    for (var k=0;k<this.houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
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
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.houres[i]} : ${this.cookiesPerHoure[i]} Cookies`
   // liEl.textContent=this.houres[i] +' '+this.cookiesPerHoure[i] +' ' + " Cookies" 
    // var arr=[];
    // arr.push(this.cookiesPurchased),
    // console.log(arr),
}
var totalEl =document.createElement('li');
ulEl.appendChild(totalEl);
totalEl.textContent=this.total;

},
};
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}


seattle.getCustomerPerHoure(23, 65);
seattle . render();
console.table(seattle);








var Tokyo	={
    locationName:'Tokyo	',
    max:24,
    min:3,
    customerPerHoure:[],
    averageHourlyCustomers:1.2,
    cookiesPerHoure:[],
    total:0,

    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure:function(min,max){

    for (var k=0;k<this.houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
    },
  

render: function () {
    var container = document.getElementById('Shop 2');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var i=0;i<this.houres.length;i++){
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.houres[i]} : ${this.cookiesPerHoure[i]} Cookies`
   // liEl.textContent=this.houres[i] +' '+this.cookiesPerHoure[i] +' ' + " Cookies" 
    // var arr=[];
    // arr.push(this.cookiesPurchased),
    // console.log(arr),
}
var totalEl =document.createElement('li');
ulEl.appendChild(totalEl);
totalEl.textContent=this.total;

},
};
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}


Tokyo	.getCustomerPerHoure(3, 24);
Tokyo	 . render();
console.table(Tokyo	);










var Dubai	={
    locationName:'Dubai	',
    max:38,
    min:11,
    customerPerHoure:[],
    averageHourlyCustomers:3.7,
    cookiesPerHoure:[],
    total:0,

    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure:function(min,max){

    for (var k=0;k<this.houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
    },
  

render: function () {
    var container = document.getElementById('Shop 3');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var i=0;i<this.houres.length;i++){
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.houres[i]} : ${this.cookiesPerHoure[i]} Cookies`
   // liEl.textContent=this.houres[i] +' '+this.cookiesPerHoure[i] +' ' + " Cookies" 
    // var arr=[];
    // arr.push(this.cookiesPurchased),
    // console.log(arr),
}
var totalEl =document.createElement('li');
ulEl.appendChild(totalEl);
totalEl.textContent=this.total;

},
};
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}


Dubai	.getCustomerPerHoure(11, 38);
Dubai	 . render();
console.table(Dubai	);








var Paris	={
    locationName:'Paris	',
    max:38,
    min:20,
    customerPerHoure:[],
    averageHourlyCustomers:2.3,
    cookiesPerHoure:[],
    total:0,

    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure:function(min,max){

    for (var k=0;k<this.houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
    },
  

render: function () {
    var container = document.getElementById('Shop 4');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var i=0;i<this.houres.length;i++){
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.houres[i]} : ${this.cookiesPerHoure[i]} Cookies`
   // liEl.textContent=this.houres[i] +' '+this.cookiesPerHoure[i] +' ' + " Cookies" 
    // var arr=[];
    // arr.push(this.cookiesPurchased),
    // console.log(arr),
}
var totalEl =document.createElement('li');
ulEl.appendChild(totalEl);
totalEl.textContent=this.total;

},
};
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}


Paris	.getCustomerPerHoure(20, 38);
Paris . render();
console.table(Paris	);





var Lima	={
    locationName:'Lima	',
    max:16,
    min:2,
    customerPerHoure:[],
    averageHourlyCustomers:4.6,
    cookiesPerHoure:[],
    total:0,

    houres:['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'],

    getCustomerPerHoure:function(min,max){

    for (var k=0;k<this.houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
    },
  

render: function () {
    var container = document.getElementById('Shop 5');
    console.log(container);

var articleEl = document.createElement('article');
container.appendChild(articleEl);
var h2El = document.createElement('h2')
articleEl.appendChild(h2El)
h2El.textContent=this.locationName;
var ulEl=document.createElement('ul');
articleEl.appendChild(ulEl)
for (var i=0;i<this.houres.length;i++){
    var liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`${this.houres[i]} : ${this.cookiesPerHoure[i]} Cookies`
   // liEl.textContent=this.houres[i] +' '+this.cookiesPerHoure[i] +' ' + " Cookies" 
    // var arr=[];
    // arr.push(this.cookiesPurchased),
    // console.log(arr),
}
var totalEl =document.createElement('li');
ulEl.appendChild(totalEl);
totalEl.textContent=this.total;

},
};
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}


Lima	.getCustomerPerHoure(2, 16);
Lima	 . render();
console.table(Lima	);

