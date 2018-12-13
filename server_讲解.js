'use strict';

const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};

let data = JSON.stringify(student);  
fs.writeFileSync('student-2.json', data);  
/* --01 讲解
writeFileSync  accepts 2-3 parameters: 
The path of the file to write data to, 

the data to write, 

and an optional parameter.

If the file doesn't already exist, 
then 
a new file is created for you.

-- 02讲解
Notice that here 

we have to 
use the JSON.stringify 
before saving the data. 



*/