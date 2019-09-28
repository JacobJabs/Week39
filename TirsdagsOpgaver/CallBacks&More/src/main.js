
// Opgave 1
let names = ['lars', 'Jan', 'Peter', 'Bo', 'Frederik', "Jacob", 'Jabs']; 

function checkLetA(names) {
    return names.includes('a');
}
let conLetA = names.filter(checkLetA); 

console.log(conLetA); 

let rev = conLetA.reverse(); 
console.log(rev); 

//opgave 2 
// a) 

Array.prototype.mfilter =  function (fun) {
    let filtered = []; 
    for(let i = 0; i < this.length; i++) {
      if (fun(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };

  function getarr(name) {
      return name.length >= 4;
  }

  let myarray =['hamad','jabs','benji'];
  
  let myar = myarray.mfilter(getarr);
  console.log(myar);


// Opgave 4 
let numbers = [1, 3, 5, 10, 11];
let result = [4,8,15,21,11];

function insert(res, length, array) {
  if(length < array.length -1)
  return res + array[length+1];
  else return res;
}

var results = numbers.map(insert);
console.log(results);


//opgave 4.b

function navHelp(value) {
  return '<a href="">' + value + '</a>'
}


function navLinks(array) {
  let aNames = array.map(navHelp);

  let printString = '<nav>\n';
  printString = printString + aNames.join('\n');
  return printString = printString + '\n</nav>';
}
console.log(navLinks(names));


//opgave 4.c 

let namess = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function myTable(arr) {
  let returnThisString = '<table>\n'; 


let myTableArr = function(arr) {
  function helper(element) {
    let returnThisString = '<tr>\n';
    returnThisString = returnThisString + '<td>' + element.name + '</td>\n';
    returnThisString = returnThisString + '<td>' + element.phone + '</td>';
    return returnThisString + '\n</tr>'; 
  }
  let objects = arr.map(helper); 
  return objects.join('\n'); 
}; 

returnThisString = returnThisString + myTableArr(arr); 
return returnThisString + '\n</table>'; 
}

console.log(myTable(names)); 


// opgave 4.d 

function navLinks2(arr) {

  let array2 = arr.map(function (value) {
      return value.name;
  })

  let aNames = array2.map(arr);

  let printString = '<nav>\n';
  printString += aNames.join('\n');
  return printString += '\n</nav>';
}
document.getElementById("names").innerHTML = myTable(names);

document.getElementById("printString").innerHTML = navLinks2(names);


// opgave 5 

var all= ["Lars", "Peter", "Jan", "Bo"]; 

console.log(all.join(',' + ' ' + '#')); 

// 5.b 

var numberss = [2, 3, 67, 33].reduce((sum, value) => sum + value); 

console.log(numberss); 



