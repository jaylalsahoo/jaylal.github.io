'use strict';
var count= 0;
var citiesBeginWith = function(data2, alpha){
   for(var i=0; i<data2.length;i++){
       if(data2[i].name[0]==alpha){
           console.log(data2[i].name);
           count = count +1;
       }
   }
   console.log("Total no of cities start with" +" "+ alpha +" "+ ":" + count);
}
var request = new XMLHttpRequest();
request.open("get", "data.json");
request.send();

request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
        var data1 = JSON.parse(request.response);
        citiesBeginWith(data1, 'A');
    }
}