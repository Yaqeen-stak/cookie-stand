"use strict"
var houres=['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'];
// var shopPlace=['seattle','Tokyo','Dubai','Paris','Lima'];

var container = document.getElementById('Shop ');
console.log(container);
var tableEl = document.createElement('table');
container.appendChild(tableEl);

var locations=[];
function getRandomNumber (min,max){
    return Math.floor(Math.random() * (max- min + 1) + min);
}

function Location(
    locationName,
    max,
    min,
   averageHourlyCustomers

    
)

{
    console.log(this);
this.locationName = locationName;
this.max = max;
this.min =min;
this.averageHourlyCustomers=averageHourlyCustomers;
this. customerPerHoure=[];
this.shopPlace=['seattle','Tokyo','Dubai','Paris','Lima'];
this.total=0;
this.cookiesPerHoure=[];    
locations.push(this);
console.log(this.houres);
}

Location.prototype.getCustomerPerHoure=function(min,max){

    for (var k=0;k<houres.length;k++){
        this.customerPerHoure.push(getRandomNumber(this.min,this.max));
        var cookiesPerHoure=Math.ceil(this.averageHourlyCustomers*this.customerPerHoure[k]);
        this.cookiesPerHoure.push(cookiesPerHoure);
        this.total += cookiesPerHoure;
    }
    };
    
Location.prototype.render = function () {
    var RowEl2 = document.createElement('tr');
tableEl.appendChild(RowEl2);
var tdEl = document.createElement('td');
RowEl2.appendChild(tdEl);
tdEl.textContent = this.locationName;

for (var i=0;i<houres.length;i++){
    var tdEl=document.createElement('td');
    RowEl2.appendChild(tdEl);
tdEl.textContent=this.cookiesPerHoure[i];
}

var tdEl =document.createElement('td');
RowEl2.appendChild(tdEl);
tdEl.textContent=this.total;
};
(function renderTable () {
    header();
  
 }) ();
new Location ('seattle',65,23,6.5);
locations[0].getCustomerPerHoure();
locations[0].render();

new Location ('Tokyo',23,3,1.2);
locations[1].getCustomerPerHoure();
locations[1].render();

new Location ('Dubai',38,11,3.7);
locations[2].getCustomerPerHoure();
locations[2].render();


new Location ('Paris',38,20,2.3);
locations[3].getCustomerPerHoure();
locations[3].render();


new Location ('Lima',16,2,4.6);
locations[4].getCustomerPerHoure();
locations[4].render();

function header(){
var headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);
var thEl1 = document.createElement('th');
headerRowEl.appendChild(thEl1);
thEl1.textContent = '';
for  (var j=0;j<houres.length; j++){
var thEl = document.createElement('th');
headerRowEl.appendChild(thEl);
thEl.textContent = houres[j]
}
var thEl2=document.createElement('total');
headerRowEl.appendChild(thEl2);
thEl2.textContent='total';
}


function footer(){
    var footerRowEl= document.createElement('tr');
    tableEl.appendChild(footerRowEl);
    var tdEl = document.createElement('td');
footerRowEl.appendChild(tdEl);
tdEl.textContent='totals';
for  (var j=0;j<houres.length; j++){
    var totalForEachHoure= 0;
    for (var o=0;o<locations.length;o++){
totalForEachHoure += locations[o].cookiesPerHoure[j];
    }
    var tdEl=document.createElement('td');
    footerRowEl.appendChild(tdEl);
    tdEl.textContent=totalForEachHoure;
}
var totalOfTotals=0;
for (var g=0;g<locations.length;g++){
totalOfTotals += locations[g].total;
}
var tdEl = document.createElement('td');
footerRowEl.appendChild(tdEl);
tdEl.textContent=totalOfTotals;
}
(function renderTable () {
    footer();
  
 }) ();
