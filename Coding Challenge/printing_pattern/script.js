'use strict';

var pattern = function(num) {
    for(var i=1;i<=num;i++){
      var line="";
        for(var j=1;j<=i;j++){
            line=line + "*";
        }
        console.log(line);
    }


    for(var i=num;i>=1;i--) {
        var line="";
        for(var j=1;j<=i;j++){
            line=line + "*";
        }
        console.log(line);
    }
}



pattern(5);