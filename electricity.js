const input = require("readline-sync")
let u= input.questionInt("enter unit: ")

if(u<=50){amount=u*0.5; surcharge=amount*0.20;bill=amount+surcharge}
else if(u<=150){amount=u*250+((u-50)*0.75); surcharge=amount*0.20; bill= amount+surcharge;}
else if(u<=250){amount=100+(u-150)*1.20; surcharge=amount*0.20; bill=amount+surcharge;}
else{amount=220+(u-250)*1.50; surcharge=amount*0.20; bill=amount+surcharge;}
console.log(bill)