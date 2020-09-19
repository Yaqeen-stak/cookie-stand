"use strict"
var houres=['6Am','7Am','8Am','9Am','10Am','11Am','12Pm','1Pm','2Pm','3Pm','4Pm','5Pm','6Pm','7Pm'];
// var shopPlace=['seattle','Tokyo','Dubai','Paris','Lima'];

var container = document.getElementById('Shop ');
console.log(container);
var tableEl = document.createElement('table');
container.appendChild(tableEl);
var form=document.getElementById('form');
console.log(form);
var newform=document.getElementById('newForm')

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

Location.prototype.getCustomerPerHoure=function(){

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
new Location ('Tokyo',23,3,1.2);
new Location ('Dubai',38,11,3.7);
new Location ('Paris',38,20,2.3);
new Location ('Lima',16,2,4.6);
for(var m=0;m<locations.length;m++){
locations[m].getCustomerPerHoure();
locations[m].render();
}
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
// (function renderTable () {
//     footer();
  
//  }) ();

 form.addEventListener('submit',function (lab9){
    event.preventDefault();
    console.log(event.target);
    var locationName = event.target.locationName.value;
    console.log(locationName);
    var max = event.target.max.value;
    console.log(max);
    var min = event.target.min.value;
    console.log(min);
    var averageHourlyCustomers = event.target.average.value;
    console.log(averageHourlyCustomers);

    var location= new Location(
        locationName,
        max,
       min,
       averageHourlyCustomers
      );
      var rowCount=tableEl.rows.length;
tableEl.deleteRow(rowCount-1)
      location.getCustomerPerHoure(65,23);
      location.render();
      newForm.reset();
      footer();
    });
     footer();
 




